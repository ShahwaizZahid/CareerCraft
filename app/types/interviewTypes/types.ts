export type AssessmentQuestionProps = {
  question: string;
  answer: string;
  userAnswer: string;
  isCorrect: boolean;
};

export type AssessmentProps = {
  id: string;
  userId: string;
  quizScore: number;
  questions: AssessmentQuestionProps[];
  category: "Technical" | "Behavioral" | "Aptitude" | string; // extend as needed
  improvementTip?: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
};

export type QuizResultQuestionProps = {
  question: string;
  userAnswer: string;
  answer: string;
  isCorrect: boolean;
  explanation?: string;
};

export type QuizResultProps = {
  result: {
    quizScore: number;
    improvementTip?: string;
    questions: QuizResultQuestionProps[];
  };
  hideStartNew?: boolean;
  onStartNew?: () => void;
};
