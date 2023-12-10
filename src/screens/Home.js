import { FlatList, StyleSheet, View, Text } from "react-native";
import { ActivityTimer } from "../components/activity/Timer";
import { ActivityItem } from "../components/activity/Item";
import defaultItems from "../data/activities.json";

import { FlowRow, FlowText } from "../components/overrides";
import { useEffect, useState } from "react";
import { loadDayFlowItems } from "../storage";


export const ActivityHomeScreen = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const load = async () => {
      const items = await loadDayFlowItems();
      !items ? setActivities(defaultItems) : setActivities(items)
    }

    load()
  }, []);

  const checkActivity = ({id, state}) => {
    console.log(`Changing ${id} to active: ${state}`);
  }

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
