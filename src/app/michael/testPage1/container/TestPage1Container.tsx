import { message } from "antd";
import { useState } from "react";
import { TestPage1Template } from "~/components/Templates/TestPage1/TestPage1Template";

export type FooterTabs = "dollarFill" | "message" | "wallet" | "history";

export const TestPage1Container = () => {
  const [currentTab, setCurrentTab] = useState<number>(2);
  const tabs: FooterTabs[] = ["dollarFill", "message", "wallet", "history"];

  const headerLeftIconClicked = () => {
    void message.info("can't go back");
  };

  const headerRightIconClicked = () => {
    void message.info("can't go Settings");
  };

  const changeTab = (tabIndex: number) => {
    setCurrentTab(tabIndex);
  };

  const testPage1TemplateProps: React.ComponentProps<typeof TestPage1Template> =
    {
      testPage1HeaderModuleProps: {
        headerProps: {
          title: "Proxima OS",
          onClickLeftIcon: headerLeftIconClicked,
          onClickRightIcon: headerRightIconClicked,
        },
      },
      testPage1ContentModuleProps: {
        messages: [
          {
            from: "ETH",
            message:
              "namulabs is fantasic company. I would love to work there.",
            recievedAt: "08:43 PM",
            hasBadge: true,
          },
          {
            from: "Nvir",
            message:
              "namulabs is fantasic company. I would love to work there.",
            recievedAt: "08:42 AM",
            hasBadge: false,
          },
        ],
      },
      testPage1FooterModuleProps: {
        changeTab: changeTab,
        tabs: tabs,
        currentTab: currentTab,
      },
    };

  return <TestPage1Template {...testPage1TemplateProps} />;
};
