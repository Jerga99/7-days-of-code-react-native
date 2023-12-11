import { FlatList, StyleSheet, View, Text } from "react-native";
import { ActivityTimer } from "../components/activity/Timer";
import { ActivityItem } from "../components/activity/Item";
import defaultItems from "../data/activities.json";

import { FlowRow, FlowText } from "../components/overrides";
import { useEffect, useRef, useState } from "react";
import { loadDayFlowItems, storeDayFlowItems } from "../storage";


export const ActivityHomeScreen = ({isStorageEnabled}) => {
  const [activities, setActivities] = useState([]);

  const startTimeRef = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const load = async () => {
      const items = await loadDayFlowItems();
      items ? setActivities(items) : setActivities(defaultItems);
    }

    load()
  }, []);

  useEffect(() => {
    startTimeRef.current = new Date();
    tick();
  }, []);

  const tick = () => {
    const currentTime = Date.now();
    const timeDelta = currentTime - startTimeRef.current;

    if (timeDelta >= 100) {
      timeRef.current += timeDelta;
      startTimeRef.current = Date.now();
    }

    requestAnimationFrame(tick);
  };

  const saveToStorage = (data) => {
    if (isStorageEnabled) {
      storeDayFlowItems(data);
    }
  }

  const checkActivity = ({id, state}) => {
    setActivities((activities) => {
      const candidateIdx = activities.findIndex(a => a.id === id);

      if (candidateIdx > -1 && activities[candidateIdx].isActive != state) {
        const newActivities = activities.map(a =>
          a.id === id ? ({...a, isActive: state}) : ({...a, isActive: false})
        );

        saveToStorage(newActivities);
        return newActivities;
      }

      return activities;
    });
  };

  return (
    <View style={styles.screenContainer}>
      <ActivityTimer></ActivityTimer>
      <FlowRow style={styles.listHeading}>
        <FlowText style={styles.text}>Activities</FlowText>
        <FlowText style={styles.text}>Add</FlowText>
      </FlowRow>
      <FlatList
        data={activities}
        keyExtractor={({id}) => id}
        renderItem={({item}) =>
          <ActivityItem
            {...item}
            onActivityChange={checkActivity}
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
