"use client";

import { useEffect, useState } from "react";
import { type MessagesSectionContentProps } from "~/components/Components/MessagesSectionContent/MessagesSectionContent";
import BsangsHomeTemplate from "~/components/Templates/BsangsHome/BsangsHomeTemplate";

export default function BsangsHomeContainer() {
  const [selectedButton, setSelectedButton] = useState<string>("home");

  const [messagesSectionContents, setMessagesSectionContents] = useState<
    MessagesSectionContentProps[]
  >([]);

  const fetchMessagesSectionContents = async () => {
    // Dummy data
    const titles = ["Proxima", "Proxima2", "Proxima3"];

    const contents = titles.map((title: any) => ({
      iconUrl: "http://localhost:3000/dummy/proximaLogo.svg",
      title: title,
      onClick: () => alert(`Clicked ${title}`),
    }));
    setMessagesSectionContents(contents);
  };

  useEffect(() => {
    void fetchMessagesSectionContents();
  }, []);

  const homeTemplateProps: React.ComponentProps<typeof BsangsHomeTemplate> = {
    headerModuleProps: {
      title: "Proxima OS",
      onClickLeftIcon: () => alert("Connect"),
      onClickRightIcon: () => alert("Setting"),
    },
    footerModuleProps: {
      selectedButton: selectedButton,
      onSelect: (buttonName) => setSelectedButton(buttonName),
    },

    messagesSectionModuleProps: {
      contents: messagesSectionContents,
    },

    messageListModuleProps: {},
  };

  return <BsangsHomeTemplate {...homeTemplateProps} />;
}
