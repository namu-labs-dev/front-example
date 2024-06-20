import Image from "next/image";

export type MessagesSectionContentProps = {
  iconUrl: string;
  title: string;
  onClick: () => Promise<void> | void;
};

export const MessagesSectionContent = (props: MessagesSectionContentProps) => {
  return (
    <div
      className="flex cursor-pointer flex-col items-center"
      onClick={props.onClick}
    >
      <Image src={props.iconUrl} width={65} height={65} alt="icon" />
      <span className="mt-[9px] text-[16px]">{props.title}</span>
    </div>
  );
};
