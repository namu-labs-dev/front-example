"use client";
import clsx from "clsx";
import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { useNavContext } from "~/providers";
import { footerNavigation } from "~/utils/data";

const FooterModule: React.FC = () => {
  const { activeIndex, setActiveIndex } = useNavContext();

  const handleIconClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="absolute bottom-0 z-[1000] flex h-16 w-full items-center justify-center bg-black text-white">
      {footerNavigation.map((item, idx) => (
        <div
          key={idx}
          className={clsx(
            "flex h-full w-1/4 cursor-pointer items-center justify-center border-t-2",
            {
              "border-green-500": idx === activeIndex,
              "border-transparent": idx !== activeIndex,
            },
          )}
          onClick={() => handleIconClick(idx)}
        >
          <SVGAtom
            iconName={item.icon}
            size="md"
            className={clsx("nav_item", {
              "nav_item--active": idx === activeIndex,
            })}
          />
        </div>
      ))}
    </div>
  );
};

export default FooterModule;
