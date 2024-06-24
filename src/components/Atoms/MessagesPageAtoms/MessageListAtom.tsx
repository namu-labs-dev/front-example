import React from "react";
import MessageCard from "~/components/Components/MessageCard/MessageCard";
import { type messageProps } from "~/components/Modules/TestPage1/TestPage1ContentModule";

type Props = {
  messages: messageProps[];
};

export default function MessageListAtom(props: Props) {
  return (
    <div className='-mx-5 mt-6 rounded-t-[30px] bg-[#2C2D30] p-5 -mb-8 h-screen flex-grow'>
      {props.messages.map((message, index) => (
        <MessageCard key={index} message={message} />
      ))}
    </div>
  );
}
