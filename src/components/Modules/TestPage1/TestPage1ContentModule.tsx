import { HeaderAndProfileAtom } from "~/components/Atoms/MessagesPageAtoms/HeaderAndProfileAtom";
import MessageListAtom from "~/components/Atoms/MessagesPageAtoms/MessageListAtom";
import { TestPage1CustomModal } from "~/components/Components/TestPage1CustomModal/TestPage1CustomModal";

export interface messageProps {
  from: string;
  message: string;
  recievedAt: string;
  hasBadge: boolean;
}

type Props = {
  messages: messageProps[];
  modalProps: React.ComponentProps<typeof TestPage1CustomModal>;
};

export const TestPage1ContentModule = (props: Props) => {
  return (
    <div className='text-white'>
      <HeaderAndProfileAtom />
      {!props.modalProps.modalProps.isModalOpen && <MessageListAtom messages={props.messages} />}
      <TestPage1CustomModal {...props.modalProps} />  
    </div>
  );
};
