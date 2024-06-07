import { useState } from "react";
import { PageWithFormTemplate } from "~/components/Templates/PageWithForm/PageWithFormTemplate";

export const PageWithFormContainer = () => {
  const [formData, setFormData] = useState<any>({});

  const pagewithformTemplateProps: React.ComponentProps<
    typeof PageWithFormTemplate
  > = {
    pageWithFormHeaderModuleProps: {
      title: "PageWithFormHeaderModule",
      onClickLeftIcon: () => console.log("Left Icon Clicked"),
    },
    pageWithFormFormModuleProps: {
      setFormData,
    },
  };

  return <PageWithFormTemplate {...pagewithformTemplateProps} />;
};
