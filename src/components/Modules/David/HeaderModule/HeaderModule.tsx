"use client";
import { useRouter } from "next/navigation";
import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {};

const HeaderModule = (props: Props) => {
  const router = useRouter();
  return (
    <div className=" absolute top-0 z-[1000] flex h-[50px] w-full items-center justify-between bg-black px-[20px]">
      <SVGAtom iconName="homeIcon" className="cursor-pointer" />
      <p
        className="leading-22 cursor-pointer text-center text-base font-medium text-white"
        onClick={() => router.push("/testPage1")}
      >
        Proxima OS
      </p>
      <SVGAtom iconName="settingsIcon" className="cursor-pointer" />
    </div>
  );
};

export default HeaderModule;
