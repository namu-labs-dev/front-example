import { Button } from "antd";
import Image from "next/image";
import Modal from "~/components/Atoms/Modal/Modal";

type Props = {
  modalProps: React.ComponentProps<typeof Modal>;
  title: string;
  description: string;
};

export const TestPage1CustomModal = (props: Props) => {
  return (
    <Modal {...props.modalProps}>
      <div className='flex h-fit w-[340px] flex-col gap-4 p-8'>
        <h1 className='text-2xl font-bold'>{props.title}</h1>
        <Image src='/images/modal-img.png' width={267} height={250} alt="Transaction progress image" />
        <p>{props.description}</p>
      </div>
    </Modal>
  );
};
