"use client";

import { Flex } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  setSettingClicked: (value: any) => void;
}

export const VictorHeaderAtom: React.FC<Props> = ({ setSettingClicked }) => {
  return (
    <Flex className="h-full items-center justify-between">
      <Link href="/victor/testPage2">
        <Image
          src="/svgs/option.svg"
          alt=""
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </Link>

      <div className="text-xl text-white">Proxima OS</div>

      <Image
        src="/svgs/settings.svg"
        alt=""
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => setSettingClicked((prev: boolean) => !prev)}
      />
    </Flex>
  );
};
