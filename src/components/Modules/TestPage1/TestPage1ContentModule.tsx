import { HeaderAndProfileAtom } from "~/components/Atoms/MessagesPageAtoms/HeaderAndProfileAtom";
import MessageListAtom from "~/components/Atoms/MessagesPageAtoms/MessageListAtom";
import { LinkList } from "~/components/Components/LinkList/LinkList";

export interface messageProps {
  from: string;
  message: string;
  recievedAt: string;
  hasBadge: boolean;
}

type Props = {
  messages: messageProps[];
};

export const TestPage1ContentModule = (props: Props) => {
  return (
    <div className='text-white'>
      <HeaderAndProfileAtom />
      <MessageListAtom messages={props.messages}/>
    </div>
  );
};
