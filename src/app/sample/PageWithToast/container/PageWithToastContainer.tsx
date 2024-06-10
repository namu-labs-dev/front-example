import { PageWithToastTemplate } from "~/components/Templates/PageWithToast/PageWithToastTemplate";

export const PageWithToastContainer = () => {

  const pagewithtoastTemplateProps: React.ComponentProps<typeof PageWithToastTemplate> = {
    pageWithToastHeaderModuleProps: { title: "PageWithToastHeaderModule" },
  pageWithToastDescriptionModuleProps: { title: "PageWithToastDescriptionModule" },
  pageWithToastExampleModuleProps: { title: "PageWithToastExampleModule" },
  };

  return <PageWithToastTemplate {...pagewithtoastTemplateProps} />;
};
