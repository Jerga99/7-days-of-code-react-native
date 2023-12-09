import { View, StyleSheet } from "react-native"
import { FlowHighlightView, FlowText } from "../overrides"



export const ActivityTimer = () => {
  return (
    <FlowHighlightView style={styles.timerContainer}>
      <FlowText>
        I am activity timer
      </FlowText>
    </FlowHighlightView>
  )
}

const styles = StyleSheet.create({
  timerContainer: {
    height: 70,
    marginVertical: 10
  }
})
