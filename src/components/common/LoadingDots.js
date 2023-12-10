import { Animated, Easing, StyleSheet } from "react-native"
import { FlowRow } from "../overrides"
import { COLORS } from "../../variables/styles"
import { useEffect, useRef } from "react"



export const LoadingDots = () => {
  const dot1Opacity = useRef(new Animated.Value(0)).current;
  const dot2Opacity = useRef(new Animated.Value(0)).current;
  const dot3Opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const dotShowAnimations = [
      Animated.timing(dot1Opacity, {
        toValue: 1,
        duration: 700,
        easing: Easing.ease,
        useNativeDriver: false
      }),
      Animated.timing(dot2Opacity, {
        toValue: 1,
        duration: 700,
        easing: Easing.ease,
        useNativeDriver: false
      }),
      Animated.timing(dot3Opacity, {
        toValue: 1,
        duration: 700,
        easing: Easing.ease,
        useNativeDriver: false
      })
    ];

    const dotHideAnimations = [
      Animated.timing(dot1Opacity, {
        toValue: 0,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: false
      }),
      Animated.timing(dot2Opacity, {
        toValue: 0,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: false
      }),
      Animated.timing(dot3Opacity, {
        toValue: 0,
        duration: 500,
        easing: Easing.ease,
        useNativeDriver: false
      })
    ];

    const sequence = Animated.sequence([
      Animated.stagger(200, dotShowAnimations),
      Animated.delay(300),
      Animated.parallel(dotHideAnimations)
    ]);

    const loop = Animated.loop(sequence);
    loop.start();

    return () => {
      loop.stop();
    }
  }, []);

  return (
    <FlowRow>
      <Animated.View style={{...styles.dot, opacity: dot1Opacity}} />
      <Animated.View style={{...styles.dot, opacity: dot2Opacity}} />
      <Animated.View style={{...styles.dot, opacity: dot3Opacity}} />
    </FlowRow>
  )
}

const styles = StyleSheet.create({
  dot: {
    backgroundColor: COLORS.white,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5
  }
})
