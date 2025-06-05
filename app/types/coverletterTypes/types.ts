export type CoverLetterProps = {
  id: string;
  userId: string;
  content: string;
  jobDescription?: string;
  companyName: string;
  jobTitle: string;
  status: string;
  createdAt: string | Date;
  updatedAt: string | Date;
};

export type EditCoverLetterPageProps = {
  params: { id: string };
};

export type CoverLetterPreviewProps = {
  content: string;
};
