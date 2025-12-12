import { useState } from "react";
import { Step1, type Step1Data } from "./steps/step1";
import { Step2, type Step2Data } from "./steps/step2";
import { Step3, type Step3Data } from "./steps/step3";
import { Step4, type Step4Data } from "./steps/step4";
import { Step5, type Step5Data } from "./steps/step5";

interface OnboardingState {
  step1: Step1Data | null;
  step2: Step2Data | null;
  step3: Step3Data | null;
  step4: Step4Data | null;
  step5: Step5Data | null;
}

export const OnboardingSteps = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState(1);
  const [onboardingData, setOnboardingData] = useState<OnboardingState>({
    step1: null,
    step2: null,
    step3: null,
    step4: null,
    step5: null,
  });

  const handleStep1Next = (data: Step1Data) => {
    setOnboardingData((prev) => ({ ...prev, step1: data }));
    setCurrentStep(2);
  };

  const handleStep2Next = (data: Step2Data) => {
    setOnboardingData((prev) => ({ ...prev, step2: data }));
    setCurrentStep(3);
  };

  const handleStep3Next = (data: Step3Data) => {
    setOnboardingData((prev) => ({ ...prev, step3: data }));
    setCurrentStep(4);
  };

   const handleStep4Next = (data: Step4Data) => {
    setOnboardingData((prev) => ({ ...prev, step4: data }));
    setCurrentStep(5);
  };

  const handleStep5Next = (data: Step5Data) => {
    setOnboardingData((prev) => ({ ...prev, step5: data }));
    setCurrentStep(6);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="w-full max-w-5xl">
        {currentStep === 1 && (
          <Step1 onNext={handleStep1Next} onBack={handleBack} />
        )}
        {currentStep === 2 && (
          <Step2 onNext={handleStep2Next} onBack={handleBack} />
        )}
        {currentStep === 3 && (
          <Step3 onNext={handleStep3Next} onBack={handleBack} />
        )}
        {currentStep === 4 && (
          <Step4 onNext={handleStep4Next} onBack={handleBack} />
        )}
        {currentStep === 5 && (
          <Step5 onNext={handleStep5Next} onBack={handleBack} />
        )}
        {currentStep === 6 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Step 3 Coming Soon
            </h2>
            <p className="text-gray-600 mb-2">
              Category: {onboardingData.step1?.selectedCategory}
            </p>
            <p className="text-gray-600">
              Customer Segments:{" "}
              {onboardingData.step2?.selectedSegments.join(", ") ||
                "No selection"}
            </p>
            <button
              onClick={handleBack}
              className="mt-8 px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              Back to Step 2
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
