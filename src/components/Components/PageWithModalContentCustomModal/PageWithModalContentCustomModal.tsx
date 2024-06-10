import { Button } from "antd";
import Modal from "~/components/Atoms/Modal/Modal";

type Props = {
  modalProps: React.ComponentProps<typeof Modal>;
  title: string;
  description: string;
};

export const PageWithModalContentCustomModal = (props: Props) => {
  return (
    <Modal {...props.modalProps}>
      <div className="flex h-fit w-80 flex-col gap-4 p-8 text-white">
        <h1 className="text-2xl">{props.title}</h1>
        <p>{props.description}</p>
        <Button onClick={() => props.modalProps.setModalOpen(false)}>
          close
        </Button>
      </div>
    </Modal>
  );
};
