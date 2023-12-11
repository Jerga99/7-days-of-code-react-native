import { Modal, StyleSheet, View } from "react-native"
import { COLORS } from "../../variables/styles";


export const FlowModal = ({children, animationType, visible, bgColor}) => {
  const defaultBgColor = bgColor || COLORS.darkGray;

  return (
    <Modal
      transparent={true}
      animationType={animationType}
      visible={visible}
    >
      <View style={styles.modalContainer}>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.8)"
  },
  modalContent: {
    minWidth: 350,
    padding: 20,
    borderRadius: 10
  }
});
