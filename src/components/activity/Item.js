


import { StyleSheet } from "react-native"
import { FlowHighlightView, FlowRow, FlowText } from "../overrides"
import { COLORS } from "../../variables/styles"

export const ActivityItem = ({title}) => {
  return (
    <FlowHighlightView style={styles.itemContainer}>
      <FlowRow style={styles.row}>
        <FlowText>
          {title}
        </FlowText>
        <FlowText style={styles.time}>
          00:00:00
        </FlowText>
      </FlowRow>
    </FlowHighlightView>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 6,
    paddingVertical: 19
  },
  row: {
    justifyContent: "space-between"
  },
  time: {
    color: COLORS.brightGreen
  }
})
