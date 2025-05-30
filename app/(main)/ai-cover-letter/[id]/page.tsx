import React from "react";

type CoverLetterProps = {
  params: {
    id: string;
  };
};

const CoverLetter: React.FC<CoverLetterProps> = async ({ params }) => {
  const id = await params.id;
  return <div>{id}</div>;
};

export default CoverLetter;
