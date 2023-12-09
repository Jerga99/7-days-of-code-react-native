


import { StyleSheet } from "react-native"
import { FlowHighlightView, FlowText } from "../overrides"

export const ActivityItem = ({title}) => {
  return (
    <FlowHighlightView style={styles.itemContainer}>
      <FlowText>
        {title}
      </FlowText>
    </FlowHighlightView>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 6,
    paddingVertical: 19
  }
})
