import React from "react";

type EkanVoteBannerModuleProps = {
  deductionAmount: number;
  votingAmount: number;
};

const EkanVoteBannerModule = ({
  deductionAmount,
  votingAmount,
}: EkanVoteBannerModuleProps) => {
  return (
    <div className="h-[5.25rem] w-full bg-[#F0F5FF] px-[1.25rem] py-[0.75rem]">
      <p className="text-lg">
        <span className="font-bold text-[#2F54EB]">{deductionAmount} FAO</span>{" "}
        will be deducted when voting is generated (Amount : {votingAmount} FAO)
      </p>
    </div>
  );
};

export default EkanVoteBannerModule;
