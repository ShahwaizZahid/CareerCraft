import { getResume } from "@/actions/resume";
import ResumeBuilder from "./_components/resume-builder";
import { ResumeProps } from "@/app/types/resumeTypes/types";

export default async function ResumePage() {
  const resume: ResumeProps | null = await getResume();

  return (
    <div className="container mx-auto py-6">
      <ResumeBuilder initialContent={resume?.content || ""} />
    </div>
  );
}
