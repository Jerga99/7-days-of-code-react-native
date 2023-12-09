


import { Text, View } from "react-native"
import { COLORS } from "../../variables/styles"


export const ActivityItem = ({title}) => {
  return (
    <View>
      <Text style={{color: COLORS.white}}>
        {title}
      </Text>
    </View>
  )
}
