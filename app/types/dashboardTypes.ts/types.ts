export type DemandLevel = "High" | "Medium" | "Low";
export type MarketOutLook = "Positive" | "Neutral" | "Negative";

export type SalaryRangeProps = {
  role: string;
  min: number;
  max: number;
  median: number;
  location?: string;
};

export type IndustryInsightProps = {
  id: string;
  industry: string;
  salaryRanges: SalaryRangeProps[]; // This will be parsed from Prisma Json[]
  growthRate: number;
  demandLevel: DemandLevel;
  topSkills: string[];
  marketOutlook: MarketOutLook;
  keyTrends: string[];
  recommendedSkills: string[];
  lastUpdated: string | Date; // If using JSON API, might be string
  nextUpdate: string | Date;
};
