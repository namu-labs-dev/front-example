import Image from "next/image";
import React from "react";

const RenderMessageAtom = ({ message }: any) => {
  const date = message.date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="flex h-[74px] cursor-pointer items-center justify-start gap-[8px] px-[12px]">
      <div className="flex h-[48px] w-[44px] items-center justify-center overflow-hidden">
        <Image
          src={message?.imageSrc}
          alt={`${message.name}_image`}
          width={100}
          height={100}
          className="overflow-hidden rounded-full"
        />
      </div>
      <div className="relative h-[48px] w-full text-left">
        <div className="flex justify-between">
          <h5 className="text-[16px] font-[700] leading-[26px]">
            {message.name}
          </h5>
          <p className="text-[14px] font-[400] leading-[16.94px]">{date}</p>
        </div>
        <p className="w-[240px] overflow-hidden truncate text-[14px] font-[500] leading-[22px] text-[#BFBFBF]">
          {message.message}
        </p>
        {!message.read && (
          <span className="absolute right-0 top-[calc(50%-4px)] rounded-full bg-[#FF4D4F] px-[6px] text-[12px] font-[400] leading-[20px]">
            N
          </span>
        )}
      </div>
    </div>
  );
};

export default RenderMessageAtom;
