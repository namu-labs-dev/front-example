"use client";

import { useState } from "react";
import BsangsHomeTemplate from "~/components/Templates/BsangsHome/BsangsHomeTemplate";

export default function BsangsHomeContainer() {
  const [selectedButton, setSelectedButton] = useState<string>("home");

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
  };

  return <BsangsHomeTemplate {...homeTemplateProps} />;
}
