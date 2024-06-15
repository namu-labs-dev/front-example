import { Badge } from "antd";
import Image from "next/image";
import React from "react";

export type MessageListContentProps = {
  iconUrl: string;
  title: string;
  content: string;
  time: string;
  isRead: boolean;
};

const MessageListContent = (props: MessageListContentProps) => {
  const { iconUrl, title, content, time, isRead } = props;
  return (
    <div className="flex w-full items-center justify-between px-[14px] py-[15px]">
      <div className="flex items-center gap-[10px]">
        <div className="min-h-[44px] min-w-[44px]">
          <Image src={iconUrl} alt="icon" width={44} height={44} />
        </div>
        <div>
          <h3 className="font-bold leading-[26px]">{title}</h3>
          <p className="text-[14px] font-medium text-[#BFBFBF]">{content}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-[5px]">
        <p className="text-[14px] font-normal leading-[16.94px]">{time}</p>
        {isRead && <Badge count={"N"} color="#f5222d" />}
      </div>
    </div>
  );
};

export default MessageListContent;
