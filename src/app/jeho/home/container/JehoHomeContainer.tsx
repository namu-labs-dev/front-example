import { message } from "antd";
import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";

export const JehoHomeContainer = () => {
  const headerLeftIconClicked = () => {
    void message.info("can't go back");
  };

  const headerRightIconClicked = () => {
    void message.info("can't go Settings");
  };

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeHeaderModuleProps: {
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

  return <HomeTemplate {...homeTemplateProps} />;
};
