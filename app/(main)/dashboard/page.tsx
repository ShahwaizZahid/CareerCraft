import { getIndustryInsights } from "@/actions/dashboard";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
import React from "react";
import DashboardView from "./_components/dashboard-view";
import { IndustryInsightProps } from "@/app/types/dashboardTypes.ts/types";

const IndustryInsightsPage = async () => {
  // Check if user is already onboarded
  const { isOnboarded } = await getUserOnboardingStatus();
  const rawInsights = await getIndustryInsights();
  const insights: IndustryInsightProps | null = rawInsights
    ? {
        ...rawInsights,
        salaryRanges: Array.isArray(rawInsights.salaryRanges)
          ? rawInsights.salaryRanges.filter(
              (
                item
              ): item is import("@/app/types/dashboardTypes.ts/types").SalaryRangeProps =>
                item !== null
            )
          : [],
      }
    : null;

  if (!isOnboarded) {
    redirect("/onboarding");
  }

  if (insights) {
    return <div>No insights available.</div>;
  }
  return (
    <div className="container mx-auto">
      <DashboardView {...(insights as unknown as IndustryInsightProps)} />
    </div>
  );
};

export default IndustryInsightsPage;
