import { useState } from "react";

import type * as svgs from "public/svgs";
import SVGAtom from "../SVGAtom/SVGAtom";

const bottomNavIcons: Array<keyof typeof svgs> = [
  "dollar",
  "chat",
  "wallet",
  "history",
];

export const EkanFooterAtom = () => {
  const [isSelected, setIsSelected] = useState<string>("wallet");
  const handleClick = (nameIcon: string) => {
    setIsSelected(nameIcon);
  };

  return (
    <div className="flex h-[60px] w-full items-center justify-evenly bg-[#262626]">
      {bottomNavIcons.map((item) => {
        return (
          <EkanFooterMenu
            onClick={handleClick}
            iconName={item}
            key={item}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
};

type EkanFooterMenuProps = {
  iconName: keyof typeof svgs;
  onClick: (name: string) => void;
  isSelected?: string;
};

const EkanFooterMenu = ({
  iconName,
  onClick,
  isSelected,
}: EkanFooterMenuProps) => {
  return (
    <button
      onClick={() => onClick(iconName)}
      className={`flex h-full w-[100px] items-center justify-center ${isSelected === iconName ? "border-t-2 border-t-[#00EC97]" : ""}`}
    >
      <SVGAtom
        iconName={iconName}
        width={25}
        height={25}
        color={`${isSelected === iconName ? "white" : "#8C8C8C"}`}
      />
    </button>
  );
};
