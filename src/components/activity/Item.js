


import { View } from "react-native"
import { FlowText } from "../overrides"


export const ActivityItem = ({title}) => {
  return (
    <View>
      <FlowText>
        {title}
      </FlowText>
    </View>
  )
}
