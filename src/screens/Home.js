import { FlatList, View } from "react-native";
import { ActivityTimer } from "../components/activity/Timer";
import { ActivityItem } from "../components/activity/Item";
import data from "../data/activities.json";


export const ActivityHomeScreen = () => {

  return (
    <View>
      <ActivityTimer></ActivityTimer>
      <FlatList
        data={data}
        keyExtractor={({id}) => id}
        renderItem={({item}) =>
          <ActivityItem title={item.title} />
        }
      />
    </View>
  )
}
