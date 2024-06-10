"use client";

import { BsangsFooterAtom } from "~/components/Atoms/BsangsFooterAtom/BsangsFooterAtom";
import { BsangsHeaderAtom } from "~/components/Atoms/BsangsHeaderAtom/BsangsHeaderAtom";

export default function Bsangs() {
  return (
    <div>
      <BsangsHeaderAtom
        onClickLeftIcon={() => alert("Connect")}
        onClickRightIcon={() => console.log("Setting")}
        title="Proxima OS"
      />

      <BsangsFooterAtom title="Good" />
    </div>
  );
}
