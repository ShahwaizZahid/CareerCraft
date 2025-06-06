export type CoverLetter = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  content: string;
  jobDescription: string | null;
  companyName: string;
  jobTitle: string;
  status: string;
};
