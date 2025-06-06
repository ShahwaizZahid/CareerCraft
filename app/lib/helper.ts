import type { Entry } from "@/app/types/resumeTypes/types";

export function entriesToMarkdown(
  entries: Entry[],
  type: "Experience" | "Education" | "Project"
): string {
  if (!entries?.length) return "";

  return (
    `## ${type}\n\n` +
    entries
      .map((entry) => {
        const dateRange = entry.current
          ? `${entry.startDate} - Present`
          : `${entry.startDate} - ${entry.endDate}`;
        return `### ${entry.title} @ ${entry.organization}\n${dateRange}\n\n${entry.description}`;
      })
      .join("\n\n")
  );
}
