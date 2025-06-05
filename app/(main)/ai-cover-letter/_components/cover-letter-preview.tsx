"use client";

import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { CoverLetterPreviewProps } from "@/app/types/coverletterTypes/types";

const CoverLetterPreview: React.FC<CoverLetterPreviewProps> = ({ content }) => {
  return (
    <div className="py-4">
      <MDEditor value={content} preview="preview" height={700} />
    </div>
  );
};

export default CoverLetterPreview;
