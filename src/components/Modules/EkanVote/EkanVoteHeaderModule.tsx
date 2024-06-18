import React from "react";

type EkanVoteHeaderModuleProps = {
  title: string;
};

const EkanVoteHeaderModule = ({ title }: EkanVoteHeaderModuleProps) => {
  return (
    <div className="flex h-[3.75rem] w-full items-center justify-center py-[1.25rem]">
      <h1 className="text-center text-lg font-bold">{title}</h1>
    </div>
  );
};

export default EkanVoteHeaderModule;
