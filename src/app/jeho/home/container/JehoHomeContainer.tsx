import { message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { JehoHomeTemplate } from "~/components/Templates/JehoHome/JehoHomeTemplate";

export const JehoHomeContainer = () => {
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const router = useRouter();
  const headerLeftIconClicked = () => {
    void router.push("/jeho/vote");
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
      onClick: setIsCustomModalOpen,
    },
    homeFooterModuleProps: { title: "HomeFooterModule" },
    transactionModalProps: {
      isModalOpen: isCustomModalOpen,
      setModalOpen: setIsCustomModalOpen,
    },
  };

  return <JehoHomeTemplate {...homeTemplateProps} />;
};
