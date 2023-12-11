import { Pressable, Text } from "react-native"
import { COLORS } from "../../variables/styles"


// "primary" "danger" "warning"

export const FlowButton = ({text, ghost, type, ...rest}) => {
  const color = type === "primary" ?
    COLORS.normalGreen : type === "danger" ?
    COLORS.brightRed : type === "warning" ?
    COLORS.brightYellow : COLORS.brightBlue;

  const isGhost = ghost || false;

  const buttonStyle = isGhost ? {
    backgroundColor: "transparent"
  } : {
    backgroundColor: color,
    padding: 10,
    borderRadius: 5
  };

  const textStyle = isGhost ? {
    color
  } : {
    color: COLORS.white
  }

  return (
    <Pressable {...rest} style={{...buttonStyle, userSelect: "none"}}>
      <Text style={{...textStyle}}>{text}</Text>
    </Pressable>
  )
}
