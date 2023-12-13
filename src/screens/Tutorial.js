import { View } from "react-native"
import { FlowButton, FlowModal, FlowRow, FlowText } from "../components/overrides"
import { useState } from "react"

const MAX_STEPS = 3;

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
    <FlowModal visible={visible}>
      <View style={{marginBottom: 10}}>
        <View>
          <FlowText>
            Welcome to tutorial!
          </FlowText>
        </View>
        { step === 1 &&
          <View>
            <FlowText>Step 1</FlowText>
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
