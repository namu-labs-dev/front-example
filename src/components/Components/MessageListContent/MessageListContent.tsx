import Image from "next/image";

export type MessageListContentProps = {
  iconUrl: string;
  title: string;
  content: string;
  time: string;
  isRead: boolean;

  onClick: () => void;
};

export const MessageListContent = (props: MessageListContentProps) => {
  const { iconUrl, title, content, time, isRead, onClick } = props;

  return (
    <div
      className="flex h-[74px] max-w-full cursor-pointer items-center gap-[15px] px-[35px]"
      onClick={onClick}
    >
      <div className="min-h-[44px] min-w-[44px]">
        <Image src={iconUrl} alt="icon" width={44} height={44} />
      </div>

      <div className="w-full min-w-0">
        <div className="flex w-full justify-between">
          <span className="text-[16px] font-bold leading-[26px] text-white">
            {title}
          </span>
          <span className="text-[14px] text-[#BFBFBF]">{time}</span>
        </div>
        <div className="flex max-w-full justify-between">
          <div
            className="w-full overflow-hidden text-ellipsis
          whitespace-nowrap text-[14px] leading-[22px] text-[#BFBFBF]"
          >
            {content}
          </div>
          {isRead && (
            <div className="h-[20px] min-w-[20px] rounded-full bg-[#FF4D4F] text-center text-[12px] text-white">
              N
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
