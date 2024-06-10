"use client";

import { useEffect, useState } from "react";
import { type MessagesSectionContentProps } from "~/components/Components/MessagesSectionContent/MessagesSectionContent";
import BsangsHomeTemplate from "~/components/Templates/BsangsHome/BsangsHomeTemplate";

export default function BsangsHomeContainer() {
  const [selectedButton, setSelectedButton] = useState<string>("home");

  const [messagesSectionContents, setMessagesSectionContents] = useState<
    MessagesSectionContentProps[]
  >([]);
  const [messageListContents, setMessageListContents] = useState<any[]>([]);

  const fetchMessagesSectionContents = async () => {
    // dynamic import dummy data
    const { MESSAGE_SECTION_CONTENTS } = await import("./dummy");

    setMessagesSectionContents(MESSAGE_SECTION_CONTENTS);
  };

  const fetchMessageListContents = async () => {
    // dynamic import dummy data
    const { MESSAGE_LIST_CONTENTS } = await import("./dummy");

    setMessageListContents(MESSAGE_LIST_CONTENTS);
  };

  useEffect(() => {
    void fetchMessagesSectionContents();
    void fetchMessageListContents();
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

    messageListModuleProps: {
      contents: messageListContents,
    },
  };

  return <BsangsHomeTemplate {...homeTemplateProps} />;
}
