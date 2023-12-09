import { View, StyleSheet } from "react-native"
import { FlowText } from "../overrides"



export const ActivityTimer = () => {
  return (
    <View style={styles.timerContainer}>
      <FlowText>
        I am activity timer
      </FlowText>
    </View>
  )
}

const styles = StyleSheet.create({
  timerContainer: {
    height: 70,
    marginVertical: 10,
    backgroundColor: 'red'
  }
})
