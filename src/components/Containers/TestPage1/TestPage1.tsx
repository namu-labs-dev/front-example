"use client";
import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { TestPageTemplate } from "~/components/Templates/David";
import { useNavContext } from "~/providers";

type Props = {};

const TestPage1 = (props: Props) => {
  const { activeIndex } = useNavContext();

  return (
    <TestPageTemplate>
      <div className="p-[24px] text-white">
        {activeIndex === 0 ? (
          <>
            <span>Balance: </span>
            <h1 className="text-2xl font-bold text-white">$00.00</h1>
          </>
        ) : activeIndex === 1 ? (
          <>
            <h2 className="text-white">Nothing to see here</h2>
          </>
        ) : activeIndex === 2 ? (
          <div className="flex flex-col items-start justify-start">
            <h1 className="mb-6 text-2xl font-semibold">Messages</h1>
            <SVGAtom
              iconName="proximaIcon"
              width={65}
              height={65}
              className="cursor-pointer"
            />
            <p className="mt-2 text-base">Proxima</p>
          </div>
        ) : (
          <>
            <h2 className="text-white">No history</h2>
          </>
        )}
      </div>
    </TestPageTemplate>
  );
};

export default TestPage1;
