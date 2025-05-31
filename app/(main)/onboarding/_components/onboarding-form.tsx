import React from "react";

type Industry = {
  id: string;
  name: string;
  subIndustries: string[];
};

type OnboardingFormProps = {
  industries: Industry[];
};

export default function OnboardingForm({ industries }: OnboardingFormProps) {
  return <div>OnBoarding Form</div>;
}
