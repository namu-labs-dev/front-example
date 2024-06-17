"use client";

import { useRouter } from "next/navigation";
import { TestPage2Template } from "~/components/Templates/TestPage2/TestPage2Template";
import ToastStore from "~/store/ToastStore";

export const TestPage2Container = () => {
  const router = useRouter();

  const TestPage2TemplateProps: React.ComponentProps<typeof TestPage2Template> =
    {
      TestPage2HeaderModuleProps: {
        headerProps: {
          title: "Vote",
        },
      },
      TestPage2ToastModuleProp: {
        onClickToastButton: () => {
          ToastStore.info(
            "will be deducted when voting is generated (Amount : 9 FAO)",
          );
        },
      },
    };

  return <TestPage2Template {...TestPage2TemplateProps} />;
};
