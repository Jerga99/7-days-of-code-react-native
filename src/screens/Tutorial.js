import { View } from "react-native"
import { FlowButton, FlowModal, FlowRow, FlowText } from "../components/overrides"
import { ActivityItem } from "../components/activity/Item";
import { useState } from "react"
import { COLORS } from "../variables/styles";

const MAX_STEPS = 3;

const empty = () => {}

const PreviewItem = () =>
  <ActivityItem
    title={"Preview"}
    time={0}
    onActivityChange={empty}
    onSwipeStart={empty}
    onSwipeEnd={empty}
    onDoubleClick={empty}
  />

export const TutorialScreen = ({visible}) => {
  const [step, setStep] = useState(1);

  const canGoNext = step < MAX_STEPS;
  const canGoBack = step > 1;

  const goNext = () => {
    if (canGoNext) {
      setStep(step + 1);
    }
  }

  const goBack = () => {
    if (canGoBack) {
      setStep(step - 1);
    }
  }

  return (
    <FlowModal visible={visible} bgColor={COLORS.lightBlack}>
      <View style={{marginBottom: 10}}>
        { step === 1 &&
          <View>
            <View style={{marginBottom: 20}}>
              <FlowText>To start tracking, swipe right.</FlowText>
            </View>
            <PreviewItem />
          </View>
        }
        { step === 2 &&
          <View>
            <FlowText>Step 2</FlowText>
          </View>
        }
        { step === 3 &&
          <View>
            <FlowText>Step 3</FlowText>
          </View>
        }
      </View>
      <View>
        <FlowRow>
          <FlowButton
            onPressIn={goBack}
            disabled={!canGoBack}
            ghost
            type={"primary"}
            content={"Back"}
            style={{marginRight: 10}}
          />
          <FlowButton
            onPressIn={goNext}
            disabled={!canGoNext}
            ghost
            type={"primary"}
            content={"Next"}
          />
        </FlowRow>
      </View>
    </FlowModal>
  )
}