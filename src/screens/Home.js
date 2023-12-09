import { View } from "react-native"
import { ActivityTimer } from "../components/activity/Timer"
import { ActivityItem } from "../components/activity/Item"



export const ActivityHomeScreen = () => {

  return (
    <View>
      <ActivityTimer></ActivityTimer>
      <ActivityItem></ActivityItem>
      <ActivityItem></ActivityItem>
      <ActivityItem></ActivityItem>
    </View>
  )
}
