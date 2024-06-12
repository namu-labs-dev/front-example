"use client";

import { Flex } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  setHeaderClicked: (value: any) => void;
}

export const ZainahHeaderAtom: React.FC<Props> = ({ setHeaderClicked }) => {
  return (
    <Flex className="h-full items-center justify-between">
      <Link href="/zainah/testPage_2">
        <Image
          src="/icon.png"
          alt=""
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </Link>

      <div className="text-xl text-white">Proxima OS</div>

      <Image
        src="/settings.png"
        alt=""
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => setHeaderClicked((prev: boolean) => !prev)}
      />
    </Flex>
  );
};
