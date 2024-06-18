import Image from "next/image";
import { Badge } from "antd";

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
    <div className="flex w-full items-center justify-between px-[1rem] py-[1rem]">
      <div className="flex items-center gap-[0.5rem]">
        <div className="min-h-[2.75rem] min-w-[2.75rem]">
          <Image src={iconUrl} alt="icon" width={44} height={44} />
        </div>
        <div>
          <h3 className="font-bold leading-[1.5rem]">{title}</h3>
          <p className="text-[1rem] font-medium text-[#BFBFBF]">{content}</p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-[0.5rem]">
        <p className="text-[1rem] font-normal leading-[1rem]">{time}</p>
        {isRead && <Badge count={"N"} color="#f5222d" />}
      </div>
    </div>
  );
};

export default MessageListContent;
