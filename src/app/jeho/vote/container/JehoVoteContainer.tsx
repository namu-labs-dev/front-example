import { message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { JehoVoteTemplate } from "~/components/Templates/JehoVote/JehoVoteTemplate";
// import { JehoHomeTemplate } from "~/components/Templates/JehoHome/JehoHomeTemplate";

export const JehoHomeContainer = () => {
  const homeTemplateProps: React.ComponentProps<typeof JehoVoteTemplate> = {
    // homeHeaderModuleProps: {
    //   headerProps: {
    //     title: "Proxima OS",
    //     onClickLeftIcon: headerLeftIconClicked,
    //     onClickRightIcon: headerRightIconClicked,
    //   },
    // },
    // homeContentModuleProps: {
    //   onClick: setIsCustomModalOpen,
    // },
    // homeFooterModuleProps: { title: "HomeFooterModule" },
    // transactionModalProps: {
    //   isModalOpen: isCustomModalOpen,
    //   setModalOpen: setIsCustomModalOpen,
    // },
  };

  return <JehoVoteTemplate {...homeTemplateProps} />;
};
