import type { JsonValue } from "type-fest"; // or define JsonValue yourself if you don't have this package

export type QuizResult = {
  id: string;
  userId: string;
  quizScore: number;
  questions: JsonValue[];
  category: string;
  improvementTip: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type QuizQuestion = {
  question: string;
  isCorrect: boolean;
  userAnswer: string;
  answer: string;
  explanation: string;
};
