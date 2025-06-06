export type ResumeProps = {
  id: string;
  userId: string;
  content: string;
  createdAt: string | Date;
  updatedAt: string | Date;
};

export type ResumeBuilderProps = {
  initialContent: string;
};

export type Entry = {
  title: string;
  organization: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string;
};

export type EntryFormProps = {
  type: "Experience" | "Education" | "Project";
  entries: Entry[];
  onChange: (updatedEntries: Entry[]) => void;
};

export type ImproveAIProps = {
  current: string;
  type: "experience" | "education" | "project";
};
