import React from "react";

type Props = {
  title: string;
};

const JehoVoteHeaderModule = (props: Props) => {
  return (
    <div className="flex h-[59px] w-full items-center justify-center py-[20px]">
      <h1 className="text-center text-[18.68px] font-bold leading-[26.37px]">
        {props.title}
      </h1>
    </div>
  );
};

export default JehoVoteHeaderModule;
