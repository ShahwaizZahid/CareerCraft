import React from "react";
import StatsCards from "./_components/stats-cards";
import { getAssessments } from "@/actions/interview";
import PerformanceChart from "./_components/performace-chart";
import QuizList from "./_components/quiz-list";
import {
  AssessmentProps,
  AssessmentQuestionProps,
} from "@/app/types/interviewTypes/types";

const InterviewPage = async () => {
  const raw = await getAssessments();

  const assessments: AssessmentProps[] = raw.map((item) => ({
    ...item,
    questions: item.questions as AssessmentQuestionProps[], // 👈 safely cast here
  }));

  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-6xl font-bold gradient-title">
            Interview Preparation
          </h1>
        </div>
        <div className="space-y-6">
          <StatsCards assessments={assessments} />
          <PerformanceChart assessments={assessments} />
          <QuizList assessments={assessments} />
        </div>
      </div>
    </>
  );
};

export default InterviewPage;
