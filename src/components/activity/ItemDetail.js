
import { StyleSheet, View } from "react-native";
import { FlowButton, FlowHighlightView, FlowModal, FlowText } from "../overrides/index";
import { useState } from "react";
import { COLORS, SIZES } from "../../variables/styles";




export const ItemDetail = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <FlowModal
      fullScreen
      bgColor={COLORS.black}
      visible={showModal}
      animationType={"fade"}
    >
      <FlowButton
        style={styles.backButton}
        ghost
        type={"primary"}
        content={"Back"}
      />
      <FlowHighlightView>
        <View>
          <FlowText style={styles.timer}>
            00:00:00
          </FlowText>
        </View>
        <View>
          <FlowText style={styles.title}>Some Title</FlowText>
        </View>
        <View>
          <FlowText>Some Description</FlowText>
        </View>
        <View style={{marginBottom: 20}} />
        <View>
          <FlowButton ghost type={"primary"} content={"Edit"}/>
        </View>
      </FlowHighlightView>
      <View>
        <FlowButton type={"danger"} content={"Delete"} style={styles.deleteButton}/>
      </View>
    </FlowModal>
  )
}

const styles = StyleSheet.create({
  backButton: {
    marginBottom: 20,
  },
  deleteButton: {
    marginTop: 10,
  },
  timer: {
    color: COLORS.brightGreen,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
  }
})
