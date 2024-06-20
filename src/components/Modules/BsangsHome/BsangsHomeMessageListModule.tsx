import {
  MessageListContent,
  type MessageListContentProps,
} from "~/components/Components/MessageListContent/MessageListContent";

type Props = {
  contents: MessageListContentProps[];
};

export const BsangsHomeMessageListModule = (props: Props) => {
  return (
    <div className="h-full rounded-t-[30px] bg-[#2C2D30] pt-[20px]">
      {props.contents.map((item, index) => (
        <MessageListContent key={index} {...item} />
      ))}
    </div>
  );
};
