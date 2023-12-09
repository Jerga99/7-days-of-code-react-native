import { Text, View, StyleSheet } from "react-native"



export const ActivityTimer = () => {
  return (
    <View style={styles.timerContainer}>
      <Text>
        I am activity timer
      </Text>
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
