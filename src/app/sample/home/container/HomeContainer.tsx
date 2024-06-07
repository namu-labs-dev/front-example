import { message } from "antd";
import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";

export const HomeContainer = () => {
  const headerLeftIconClicked = () => {
    void message.info("can't go back");
  };

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeHeaderModuleProps: {
      title: "HomeHeaderModule",
      onClickLeftIcon: headerLeftIconClicked,
    },
    homeContentModuleProps: {
      title: "HomeContentModule",
      sampleLinks: [
        "/sample/empty",
        "/sample/pageWithModal",
        "/sample/pageWithForm",
      ],
      sampleNumbers: Array.from({ length: 100 }, (_, i) => i + 1),
    },
    homeFooterModuleProps: { title: "HomeFooterModule" },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
