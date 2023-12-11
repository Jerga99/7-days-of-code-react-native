import { Pressable, Text } from "react-native"
import { COLORS } from "../../variables/styles"


// "primary" "danger" "warning"

export const FlowButton = ({text, ghost, disabled, type, ...rest}) => {
  const color = type === "primary" ?
    COLORS.normalGreen : type === "danger" ?
    COLORS.brightRed : type === "warning" ?
    COLORS.brightYellow : COLORS.brightBlue;

  const isDisabled = disabled ?? false;
  const isGhost = ghost ?? false;

  const buttonStyle = isGhost ? {
    backgroundColor: "transparent"
  } : {
    backgroundColor: isDisabled ? COLORS.semiDarkGray : color,
    padding: 10,
    borderRadius: 5
  };

  const textStyle = isGhost ? {
    color: isDisabled ? COLORS.semiDarkGray : color
  } : {
    color: isDisabled ? COLORS.darkGray : COLORS.white
  };

  return (
    <Pressable
      disabled={isDisabled} {...rest}
      style={{...buttonStyle, userSelect: "none"}}
    >
      <Text style={{...textStyle}}>{text}</Text>
    </Pressable>
  )
}
