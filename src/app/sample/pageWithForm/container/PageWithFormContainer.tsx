import { PageWithFormTemplate } from "~/components/Templates/PageWithForm/PageWithFormTemplate";

export const PageWithFormContainer = () => {
  const pagewithformTemplateProps: React.ComponentProps<
    typeof PageWithFormTemplate
  > = {
    pageWithFormHeaderModuleProps: {
      title: "PageWithFormHeaderModule",
      onClickLeftIcon: () => console.log("Left Icon Clicked"),
    },
  };

  return <PageWithFormTemplate {...pagewithformTemplateProps} />;
};
