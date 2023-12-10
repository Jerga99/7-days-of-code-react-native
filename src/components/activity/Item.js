


import { Animated, PanResponder, StyleSheet } from "react-native";
import { FlowHighlightView, FlowRow, FlowText } from "../overrides";
import { COLORS } from "../../variables/styles";
import { useRef } from "react";
import { LoadingDots } from "../common/LoadingDots";

const TRESHOLD = 60;

export const ActivityItem = ({title, id, isActive, onActivityChange}) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderMove: (event, gestureState) => {
        const currentX = gestureState.dx;

        if (currentX > TRESHOLD) {
          onActivityChange({id, state: true});
        }

        if (currentX < -TRESHOLD) {
          onActivityChange({id, state: false});
        }

        Animated.event([
          null, {dx: pan.x, dy: pan.y}], {useNativeDriver: false})(event, gestureState)
      },
      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: {x:0, y:0},
          useNativeDriver: false,
        }).start();
      }
    })
  ).current

  const itemBackground = isActive ?
    { backgroundColor: COLORS.semiDarkGray } :
    { backgroundColor: COLORS.darkGray }

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        touchAction: "none",
        userSelect: "none",
        transform: [{translateX: pan.x}]
      }}
    >
      <FlowHighlightView style={{...styles.itemContainer, ...itemBackground}}>
        <FlowRow style={styles.row}>
          <FlowText>
            {title}
          </FlowText>
          { isActive ?
            <LoadingDots /> :
            <FlowText style={styles.time}>
              00:00:00
            </FlowText>
          }
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
