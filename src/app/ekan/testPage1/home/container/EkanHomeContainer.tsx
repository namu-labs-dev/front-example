import { useState } from "react";
import { message } from "antd";

import { EkanHomeTemplate } from "~/components/Templates/EkanHome/EkanHomeTemplate";

export const EkanHomeContainer = () => {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const headerLeftIconClicked = () => {
    void message.info("Unavailable");
  };

  const headerRightIconClicked = () => {
    setIsCustomModalOpen((prev) => !prev);
  };

  const homeTemplateProps: React.ComponentProps<typeof EkanHomeTemplate> = {
    homeHeaderModuleProps: {
      headerProps: {
        title: "Proxima OS",
        onClickLeftIcon: headerLeftIconClicked,
        onClickRightIcon: headerRightIconClicked,
      },
    },
    transactionModalProps: {
      isModalOpen: isCustomModalOpen,
      setModalOpen: setIsCustomModalOpen,
    },
  };

  return <EkanHomeTemplate {...homeTemplateProps} />;
};
