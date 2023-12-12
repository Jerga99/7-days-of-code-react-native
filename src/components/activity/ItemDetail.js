
import { StyleSheet, View } from "react-native";
import { FlowButton, FlowHighlightView, FlowModal, FlowText } from "../overrides/index";
import { useEffect, useState } from "react";
import { COLORS, SIZES } from "../../variables/styles";
import { formatTime } from "../../utils/functions";




export const ItemDetail = ({focusedItem, time}) => {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (focusedItem) {
      setShowModal(true);
      setTitle(focusedItem.title)
      setDescription(focusedItem.description)
    }
  }, [focusedItem])

  return (
    <FlowModal
      fullScreen
      bgColor={COLORS.black}
      visible={showModal}
      animationType={"fade"}
    >
      <FlowButton
        onPressIn={() => setShowModal(false)}
        style={styles.backButton}
        ghost
        type={"primary"}
        content={"Back"}
      />
      <FlowHighlightView>
        <View>
          <FlowText style={styles.timer}>
            { focusedItem?.isActive ?
              formatTime(time) :
              formatTime(focusedItem?.time)
            }
          </FlowText>
        </View>
        <View>
          <FlowText style={styles.title}>{title}</FlowText>
        </View>
        <View>
          <FlowText>{description}</FlowText>
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
