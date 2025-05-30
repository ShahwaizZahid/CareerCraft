import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return <SignIn forceRedirectUrl="/onboarding" />;
};

export default Page;
