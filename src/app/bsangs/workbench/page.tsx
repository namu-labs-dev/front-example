"use client";

import { useState } from "react";
import { BsangsFooterAtom } from "~/components/Atoms/BsangsFooterAtom/BsangsFooterAtom";
import { BsangsHeaderAtom } from "~/components/Atoms/BsangsHeaderAtom/BsangsHeaderAtom";

export default function Bsangs() {
  const [selectedButton, setSelectedButton] = useState<string>("home");
  return (
    <div>
      <BsangsHeaderAtom
        onClickLeftIcon={() => alert("Connect")}
        onClickRightIcon={() => alert("Setting")}
        title="Proxima OS"
      />

      <BsangsFooterAtom
        selectedButton={selectedButton}
        onSelect={(buttonName) => setSelectedButton(buttonName)}
      />
    </div>
  );
}
