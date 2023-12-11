import { Pressable, StyleSheet, TextInput } from "react-native";
import { FlowButton, FlowModal, FlowRow, FlowText } from "../overrides";
import { COLORS } from "../../variables/styles";
import { useState } from "react";
import { generateRandomId } from "../../utils/functions";


export const ItemCreate = () => {
  const [newItem, setNewItem] = useState({
    title: "",
    id: "",
    isActivate: false,
    time: 0
  });

  const confirm = () => {
    const _newItem = {...newItem, id: generateRandomId()}
    console.log(_newItem);
  };

  const cancel = () => {
    console.log("Cancel!");
  };

  const isError = newItem.title === String("");

  return (
    <FlowModal
      visible={true}
      animationType={"fade"}
    >
      <FlowText>Choose the name of the activity.</FlowText>
      <TextInput
        onChangeText={(title) => setNewItem({...newItem, title})}
        style={styles.input}
        placeholder="Learn C#"
        placeholderTextColor={COLORS.semiDarkGray}
      />
      <FlowRow style={{justifyContent: "space-around"}}>
        <FlowButton
          disabled={isError}
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
