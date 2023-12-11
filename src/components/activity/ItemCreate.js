import { Pressable, StyleSheet, TextInput } from "react-native";
import { FlowButton, FlowModal, FlowRow, FlowText } from "../overrides";
import { COLORS } from "../../variables/styles";


export const ItemCreate = () => {

  const confirm = () => {
    console.log("Confirm!");
  };

  const cancel = () => {
    console.log("Cancel!");
  };

  return (
    <FlowModal
      visible={true}
      animationType={"fade"}
    >
      <FlowText>Choose the name of the activity.</FlowText>
      <TextInput
        style={styles.input}
        placeholder="Learn C#"
        placeholderTextColor={COLORS.semiDarkGray}
      />
      <FlowRow style={{justifyContent: "space-around"}}>
        <FlowButton
          ghost
          type="primary"
          text={"Confirm"}
          onPress={confirm}
        />
        <FlowButton
          ghost
          type="danger"
          text={"Cancel"}
          onPress={cancel}
        />
      </FlowRow>
    </FlowModal>
  )
}

const styles = StyleSheet.create({
  input: {
    color: COLORS.white,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: COLORS.semiDarkGray,
    borderRadius: 5,
    marginVertical: 10
  }
});
