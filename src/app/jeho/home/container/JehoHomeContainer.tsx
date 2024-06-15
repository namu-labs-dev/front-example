import { message } from "antd";
import { useState } from "react";
import { JehoHomeTemplate } from "~/components/Templates/JehoHome/JehoHomeTemplate";

export const JehoHomeContainer = () => {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const headerLeftIconClicked = () => {
    setIsCustomModalOpen(true);
    console.log(isCustomModalOpen);
  };

  const headerRightIconClicked = () => {
    void message.info("can't go Settings");
  };

  const homeTemplateProps: React.ComponentProps<typeof JehoHomeTemplate> = {
    homeHeaderModuleProps: {
      headerProps: {
        title: "Proxima OS",
        onClickLeftIcon: headerLeftIconClicked,
        onClickRightIcon: headerRightIconClicked,
      },
    },
    homeContentModuleProps: {
      sampleLinks: [
        "/sample/empty",
        "/sample/pageWithModal",
        "/sample/pageWithDrawer",
        "/sample/pageWithToast",
        "/sample/pageWithForm",
      ],
    },
    homeFooterModuleProps: { title: "HomeFooterModule" },
    transactionModalProps: {
      isModalOpen: isCustomModalOpen,
      setModalOpen: setIsCustomModalOpen,
    },
  };

  return <JehoHomeTemplate {...homeTemplateProps} />;
};
