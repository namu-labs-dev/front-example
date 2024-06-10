import { Button } from "antd";
import { PageWithModalContentCustomModal } from "~/components/Components/PageWithModalContentCustomModal/PageWithModalContentCustomModal";

type Props = {
  onOpenModal: () => void;
  customModalProps: React.ComponentProps<
    typeof PageWithModalContentCustomModal
  >;
};

export const PageWithModalContentModule = (props: Props) => {
  return (
    <div className="flex h-full w-full justify-around">
      <div>
        <Button className="my-3" type="primary" onClick={props.onOpenModal}>
          Open Snapshot Modal
        </Button>
      </div>

      <div>
        <Button
          className="my-3"
          type="primary"
          onClick={() => props.customModalProps.modalProps.setModalOpen(true)}
        >
          Open Modal
        </Button>
        <PageWithModalContentCustomModal {...props.customModalProps} />
      </div>
    </div>
  );
};
