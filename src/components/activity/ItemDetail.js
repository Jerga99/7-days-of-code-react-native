
import { FlowModal, FlowText } from "../overrides/index";
import { useState } from "react";




export const ItemDetail = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <FlowModal
      fullScreen
      visible={showModal}
      animationType={"fade"}
    >
      <FlowText>Hello There!</FlowText>
    </FlowModal>
  )
}
