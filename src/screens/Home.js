import { FlatList, StyleSheet, View, Platform, AppState } from "react-native";
import { ActivityTimer } from "../components/activity/Timer";
import { ActivityItem } from "../components/activity/Item";
import defaultItems from "../data/activities.json";

import { FlowButton, FlowRow, FlowText } from "../components/overrides";
import { useEffect, useMemo, useRef, useState } from "react";
import { loadDayFlowItems, storeDayFlowItems } from "../storage";
import { usePrevious } from "../utils/functions";
import { ItemCreate } from "../components/activity/ItemCreate";
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from "../variables/styles";

export const ActivityHomeScreen = ({isStorageEnabled}) => {
  const [activities, setActivities] = useState([]);
  const [time, setTime] = useState(0);
  const [showItemCreate, setShowItemCreate] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const startTimeRef = useRef(0);
  const timeRef = useRef(0);
  const timerRequestRef = useRef(-1);

  const activeItem = useMemo(() => {
    return activities?.find(a => a.isActive);
  }, [activities]);

  const prevActiveItem = usePrevious(activeItem);

  useEffect(() => {
    const load = async () => {
      const items = await loadDayFlowItems();
      items ? setActivities(items) : setActivities(defaultItems);
    }

    load()
  }, []);

  useEffect(() => {
    const save = () => {
      setActivities((activities) => {
        updateTimeOnActiveItem(activities);
        saveToStorage(activities);
        return activities;
      });
    }

    if (Platform.OS === "web") {
      window.addEventListener("beforeunload", save);
      return () => {
        window.removeEventListener("beforeunload", save);
      }
    } else {
      const handleAppStateChange = (appState) => {
        if (appState === "background" || appState === "inactive") {
          save();
        }
      };

      const sub = AppState.addEventListener("change", handleAppStateChange);
      return () => {
        sub.remove();
      }
    }
  }, []);

  useEffect(() => {
    const isSameItem = activeItem && activeItem?.id === prevActiveItem?.id;

    if (activeItem) {
      if (!isSameItem) {
        timeRef.current = activeItem.time;
        startTimeRef.current = new Date();
      }
      tick();
    } else {
      timeRef.current = 0;
      setTime(0);
      cancelAnimationFrame(timerRequestRef.current);
    }

    return () => {
      cancelAnimationFrame(timerRequestRef.current);
    }
  }, [activeItem]);

  const tick = () => {
    const currentTime = Date.now();
    const timeDelta = currentTime - startTimeRef.current;

    if (timeDelta >= 100) {
      timeRef.current += timeDelta;
      setTime(timeRef.current);
      startTimeRef.current = Date.now();
    }

    timerRequestRef.current = requestAnimationFrame(tick);
  };

  const saveToStorage = (data) => {
    if (isStorageEnabled) {
      storeDayFlowItems(data);
    }
  }

  const updateTimeOnActiveItem = (activities) => {
    const activeIdx = activities.findIndex(a => a.isActive);
    if (activeIdx > -1) {
      activities[activeIdx].time = timeRef.current;
    }
  }

  const checkActivity = ({id, state}) => {
    setActivities((activities) => {
      const candidateIdx = activities.findIndex(a => a.id === id);

      if (candidateIdx > -1 && activities[candidateIdx].isActive != state) {
        updateTimeOnActiveItem(activities);
        const newActivities = activities.map(a =>
          a.id === id ? ({...a, isActive: state}) : ({...a, isActive: false})
        );

        saveToStorage(newActivities);
        return newActivities;
      }

      return activities;
    });
  };

  const addItem = (newItem) => {
    setActivities((activities) => {
      const newActivities = [...activities, newItem];
      saveToStorage(newActivities);
      return newActivities;
    });
  }

  return (
    <View style={styles.screenContainer}>
      <ItemCreate
        visible={showItemCreate}
        onConfirm={addItem}
        onClose={() => setShowItemCreate(false)}
      />
      <ActivityTimer
        time={time}
        title={activeItem?.title}
      />
      <FlowRow style={styles.listHeading}>
        <FlowText style={styles.text}>Activities</FlowText>
        <FlowButton
          ghost
          type="primary"
          onPressIn={() => setShowItemCreate(true)}
          content={(props) =>
            <MaterialIcons
              name="playlist-add" {...props} />
          }
        />
      </FlowRow>
      <FlatList
        scrollEnabled={scrollEnabled}
        data={activities}
        keyExtractor={({id}) => id}
        renderItem={({item}) =>
          <ActivityItem
            {...item}
            onActivityChange={checkActivity}
            onSwipeStart={() => setScrollEnabled(false)}
            onSwipeEnd={() => setScrollEnabled(true)}
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: "100%"
  },
  listHeading: {
    justifyContent: "space-between",
    paddingVertical: 10
  },
  text: {
    fontSize: 17,
    fontWeight: "bold",
  }
})
