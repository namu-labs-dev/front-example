import { useRouter } from "next/navigation";
import { useState } from "react";
import { PageWithModalTemplate } from "~/components/Templates/PageWithModal/PageWithModalTemplate";
import ModalStore from "~/store/ModalStore";

export const PageWithModalContainer = () => {
  const router = useRouter();
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  const pagewithmodalTemplateProps: React.ComponentProps<
    typeof PageWithModalTemplate
  > = {
    pageWithModalHeaderModuleProps: {
      title: "PageWithModalHeaderModule",
      onClickLeftIcon: () => router.back(),
    },
    pageWithModalContentModuleProps: {
      onOpenSnapshotModal: () =>
        ModalStore.open("TitleAndContent", {
          TitleAndContent: {
            title: "Modal Title",
            description: "Modal Content",
          },
        }),
      modalProps: {
        modalProps: {
          isModalOpen: isCustomModalOpen,
          setModalOpen: setIsCustomModalOpen,
        },
        title: "Custom Modal Title",
        description: "Custom Modal Description",
      },
    },
  };

  return <PageWithModalTemplate {...pagewithmodalTemplateProps} />;
};
