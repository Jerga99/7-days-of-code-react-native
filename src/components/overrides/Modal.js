import { Modal, StyleSheet, View, Platform } from "react-native"
import { COLORS } from "../../variables/styles";
import Constants from "expo-constants";

export const FlowModal = ({
  children,
  animationType,
  visible, bgColor, fullScreen
}) => {
  const defaultBgColor = bgColor ?? COLORS.darkGray;
  const isFullScreen = fullScreen ?? false;

  const containerStyles = isFullScreen ? {
    backgroundColor: defaultBgColor,
    paddingTop: Constants.statusBarHeight + 30
  } : {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)"
  }

  const webStyles = Platform.OS === "web" ? {
    width: 500,
    margin: "auto"
  } : {};

  return (
    <Modal
      transparent={true}
      animationType={animationType}
      visible={visible}
    >
      <View style={{...styles.modalContainer, ...containerStyles, ...webStyles}}>
        <View style={{...styles.modalContent, backgroundColor: defaultBgColor}}>
          {children}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  modalContent: {
    minWidth: 350,
    padding: 20,
    borderRadius: 10
  }
});
