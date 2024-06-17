"use client";

import { useRouter } from "next/navigation";
import { PageWithToastTemplate } from "~/components/Templates/PageWithToast/PageWithToastTemplate";
import ToastStore from "~/store/ToastStore";

export const PageWithToastContainer = () => {
  const router = useRouter();

  const pagewithtoastTemplateProps: React.ComponentProps<
    typeof PageWithToastTemplate
  > = {
    pageWithToastHeaderModuleProps: {
      headerProps: {
        title: "PageWithToastHeaderModule",
        onClickLeftIcon: () => router.back(),
      },
    },
    pageWithToastExampleModuleProps: {
      onClickToastButton: () => {
        ToastStore.info("noooo.");
      },
    },
  };

  return <PageWithToastTemplate {...pagewithtoastTemplateProps} />;
};
