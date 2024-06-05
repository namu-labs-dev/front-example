import { useRouter } from "next/navigation";
import { PageWithModalTemplate } from "~/components/Templates/PageWithModal/PageWithModalTemplate";

export const PageWithModalContainer = () => {
  const router = useRouter();

  const pagewithmodalTemplateProps: React.ComponentProps<
    typeof PageWithModalTemplate
  > = {
    pageWithModalHeaderModuleProps: {
      title: "PageWithModalHeaderModule",
      onClickLeftIcon: () => router.back(),
    },
    pageWithModalContentModuleProps: { title: "PageWithModalContentModule" },
  };

  return <PageWithModalTemplate {...pagewithmodalTemplateProps} />;
};
