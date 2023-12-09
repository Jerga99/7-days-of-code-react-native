import { View, StyleSheet } from "react-native"
import { FlowHighlightView, FlowRow, FlowText } from "../overrides"



export const ActivityTimer = () => {
  return (
    <FlowHighlightView style={styles.timerContainer}>
      <FlowRow style={styles.row}>
        <FlowText>
          No Activity
        </FlowText>
      </FlowRow>
      <FlowRow style={styles.row}>
        <FlowText>
          00:00:00
        </FlowText>
      </FlowRow>
    </FlowHighlightView>
  )
}

const styles = StyleSheet.create({
  timerContainer: {
    marginVertical: 10,
  },
  row: {
    justifyContent: 'center',
  }
})
