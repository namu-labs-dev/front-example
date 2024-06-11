"use-client";

import { Flex } from "antd";
import Image from "next/image";
import { useState } from "react";

const footerData = [
  { id: 1, src: "/svgs/dollar.svg" },
  { id: 2, src: "/svgs/chat.svg" },
  { id: 3, src: "/svgs/wallet.svg" },
  { id: 4, src: "/svgs/history.svg" },
];

export const VictorFooterAtom = () => {
  const [currentFooterItem, setCurrentFooterItem] = useState<number>(3);

  const handleCurrentFooterItem = (id: number) => {
    setCurrentFooterItem(id);
  };

  return (
    <Flex className="h-full items-center justify-between">
      {footerData.map((item, index) => (
        <div className="relative">
          {currentFooterItem === index + 1 && (
            <div
              style={{
                backgroundColor: "rgba(0, 236, 151, 1)",
                width: "100%",
                height: "2px",
                position: "absolute",
                top: "-25px",
              }}
            ></div>
          )}

          <Image
            src={item.src}
            alt=""
            width={24}
            height={24}
            className="cursor-pointer"
            key={item.id}
            onClick={() => handleCurrentFooterItem(item.id)}
          />
        </div>
      ))}
    </Flex>
  );
};
