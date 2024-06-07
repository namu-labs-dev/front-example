"use client";

import { BsangsFooterAtom } from "~/components/Atoms/BsangsFooterAtom/BsangsFooterAtom";
import { BsangsHeaderAtom } from "~/components/Atoms/BsangsHeaderAtom/BsangsHeaderAtom";
import { FooterAtom } from "~/components/Atoms/FooterAtom/FooterAtom";
import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

export default function Bsangs() {
  return (
    <div>
      <BsangsHeaderAtom
        onClickLeftIcon={() => console.log("ABC")}
        title="abc"
      />

      <BsangsFooterAtom title="Good" />
    </div>
  );
}
