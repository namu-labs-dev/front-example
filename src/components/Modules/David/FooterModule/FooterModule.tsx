"use client";
import clsx from "clsx";
import React, { useState } from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { useNavContext } from "~/providers";
import { footerNavigation } from "~/utils/data";

type Props = {};

const FooterModule = (props: Props) => {
  const { activeIndex, setActiveIndex } = useNavContext();

  const handleIconClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="absolute bottom-0 z-[1000] flex h-[60px] w-full items-center justify-center bg-black text-white">
      <>
        {footerNavigation.map((item, idx) => (
          <div
            className={clsx(
              "flex h-full w-[25%] cursor-pointer items-center justify-center border-t-[2px]",
              {
                "border-[#00EC97]": idx === activeIndex,
                "border-transparent": idx !== activeIndex,
              },
            )}
            key={idx}
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
      </>
    </div>
  );
};

export default FooterModule;
