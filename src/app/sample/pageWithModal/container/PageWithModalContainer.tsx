import { message, Modal } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PageWithModalTemplate } from "~/components/Templates/PageWithModal/PageWithModalTemplate";

export const PageWithModalContainer = () => {
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const pagewithmodalTemplateProps: React.ComponentProps<
    typeof PageWithModalTemplate
  > = {
    pageWithModalHeaderModuleProps: {
      title: "PageWithModalHeaderModule",
      onClickLeftIcon: () => router.back(),
    },
    pageWithModalContentModuleProps: {
      title: "PageWithModalContentModule",
      onOpenModal: () => {
        Modal.info({
          title: "Modal Title",
          content: "Modal Content",
        });
      },
      isDrawerOpen,
      onOpenDrawer: () => setIsDrawerOpen(true),
      onCloseDrawer: () => setIsDrawerOpen(false),
      onOpenToast: () => {
        message.info("Toast Content");
      },
    },
  };

  return <PageWithModalTemplate {...pagewithmodalTemplateProps} />;
};
