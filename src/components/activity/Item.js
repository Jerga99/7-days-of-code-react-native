


import { Animated, PanResponder, StyleSheet, Platform } from "react-native";
import { FlowHighlightView, FlowRow, FlowText } from "../overrides";
import { COLORS } from "../../variables/styles";
import { useRef } from "react";
import { LoadingDots } from "../common/LoadingDots";
import { formatTime } from "../../utils/functions";

const TRESHOLD = 60;
const TAP_DELAY = 350;

export const ActivityItem = ({
  title,
  id,
  isActive,
  time,
  onActivityChange, onSwipeStart, onSwipeEnd
}) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const lastPressTimeRef = useRef(0);
  const isSwipping = useRef(false);

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

        if (Math.abs(currentX) > TRESHOLD && !isSwipping.current) {
          isSwipping.current = true;
          onSwipeStart();
        }

        Animated.event([
          null, {dx: pan.x, dy: pan.y}], {useNativeDriver: false})(event, gestureState)
      },
      onPanResponderRelease: () => {
        isSwipping.current = false;
        onSwipeEnd();
        Animated.spring(pan, {
          toValue: {x:0, y:0},
          useNativeDriver: false,
        }).start();
      }
    })
  ).current

  const handlePress = () => {
    const currenTime = new Date().getTime();
    const isDoubleClick = currenTime - lastPressTimeRef.current <= TAP_DELAY;

    if (isDoubleClick) {
      console.log("DOUBLE!");
    } else {
      lastPressTimeRef.current = currenTime;
    }
  }

  const itemBackground = isActive ?
    { backgroundColor: COLORS.semiDarkGray } :
    { backgroundColor: COLORS.darkGray }

  return (
    <Animated.View
      onPointerDown={handlePress}
      onTouchStart={() => {
        if (Platform.OS !== "web") {
          handlePress()
        }
      }}
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
              {formatTime(time)}
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
