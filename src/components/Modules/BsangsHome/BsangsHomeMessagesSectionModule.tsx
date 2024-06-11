import {
  MessagesSectionContent,
  type MessagesSectionContentProps,
} from "~/components/Components/MessagesSectionContent/MessagesSectionContent";

type Props = {
  contents: MessagesSectionContentProps[];
};

export const BsangsHomeMessagesSectionModule = (props: Props) => {
  return (
    <div className="p-[25px] pt-[16px] text-white">
      <span className="text-[28px] font-semibold">Messages</span>
      <div className="overflow-x-scroll">
        <div className="mt-[20px] flex gap-[25px]">
          {props.contents.map((item, index) => (
            <MessagesSectionContent key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
