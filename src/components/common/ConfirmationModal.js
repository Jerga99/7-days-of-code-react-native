import { FlowButton, FlowModal, FlowRow, FlowText } from "../overrides"


export const ConfirmationModal = ({visible, message}) => {

  return (
    <FlowModal visible={visible} animationType={"fade"}>
      <FlowText style={{marginBottom: 10}}>{message}</FlowText>
      <FlowRow style={{justifyContent: "space-around"}}>
        <FlowButton ghost type={"danger"} content={"Confirm"}/>
        <FlowButton ghost type={"primary"} content={"Cancel"}/>
      </FlowRow>
    </FlowModal>
  )
}
