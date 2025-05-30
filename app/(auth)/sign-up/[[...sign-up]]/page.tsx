import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return <SignUp forceRedirectUrl="/onboarding" />;
};

export default Page;
