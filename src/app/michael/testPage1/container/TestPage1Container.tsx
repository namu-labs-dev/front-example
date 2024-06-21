import { message } from "antd";
import { TestPage1Template } from "~/components/Templates/TestPage1/TestPage1Template";

export const TestPage1Container = () => {
  const headerLeftIconClicked = () => {
    void message.info("can't go back");
  };

  const headerRightIconClicked = () => {
    void message.info("can't go Settings");
  };

  const testPage1TemplateProps: React.ComponentProps<typeof TestPage1Template> = {
    testPage1HeaderModuleProps: {
      headerProps: {
        title: "Sample Home",
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
  };

  return <TestPage1Template {...testPage1TemplateProps} />;
};
