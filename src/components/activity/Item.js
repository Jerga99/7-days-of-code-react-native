


import { Animated, PanResponder, StyleSheet } from "react-native"
import { FlowHighlightView, FlowRow, FlowText } from "../overrides"
import { COLORS } from "../../variables/styles"
import { useRef } from "react"

export const ActivityItem = ({title}) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null, {dx: pan.x, dy: pan.y}], {useNativeDriver: false}),
      onPanResponderRelease: () => {
        pan.extractOffset();
      }
    })
  ).current

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        touchAction: "none",
        userSelect: "none",
        transform: [{translateX: pan.x}]
      }}
    >
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
    </Animated.View>
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
