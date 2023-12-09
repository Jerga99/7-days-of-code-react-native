


import { FlowHighlightView, FlowText } from "../overrides"

export const ActivityItem = ({title}) => {
  return (
    <FlowHighlightView>
      <FlowText>
        {title}
      </FlowText>
    </FlowHighlightView>
  )
}
