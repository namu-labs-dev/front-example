import { useState } from "react";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
};
type FooterMenuProps = {
  iconName: string;
  name: string;
  onClick?: (nameIcon: string) => void;
  isSelected?: string;
};

const FooterMenu = (props: FooterMenuProps) => {
  const { iconName, name, onClick, isSelected } = props;
  return (
    <button
      onClick={() => onClick && onClick(name)}
      className={`flex h-full w-[100px] items-center justify-center ${isSelected === name ? "border-t-2 border-t-[#00EC97]" : ""}`}
    >
      <SVGAtom
        iconName={iconName as any}
        width={25}
        height={25}
        color={`${isSelected === name ? "white" : "#8C8C8C"}`}
      />
    </button>
  );
};

export const FooterAtom = (props: Props) => {
  const [isSelected, setIsSelected] = useState<string>("wallet");
  const navs = [
    { iconName: "dollar", name: "home" },
    { iconName: "chat", name: "chat" },
    { iconName: "wallet", name: "wallet" },
    { iconName: "history", name: "history" },
  ];
  const handleClick = (nameIcon: string) => {
    setIsSelected(nameIcon);
  };
  return (
    <div className="flex h-[60px] w-full items-center justify-evenly bg-[#262626]">
      {navs.map((item, index) => {
        return (
          <FooterMenu
            name={item.name}
            onClick={handleClick}
            iconName={item.iconName}
            key={index}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
};
