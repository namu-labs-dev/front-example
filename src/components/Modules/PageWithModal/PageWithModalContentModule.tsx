import { Button } from "antd";
import { PageWithModalContentCustomModal } from "~/components/Components/PageWithModalContentCustomModal/PageWithModalContentCustomModal";

type Props = {
  onOpenSnapshotModal: () => void;
  modalProps: React.ComponentProps<typeof PageWithModalContentCustomModal>;
};

export const PageWithModalContentModule = (props: Props) => {
  return (
    <div className="flex h-full w-full justify-around">
      <div>
        <Button
          className="my-3"
          type="primary"
          onClick={props.onOpenSnapshotModal}
        >
          Open Snapshot Modal
        </Button>
      </div>

      <div>
        <Button
          className="my-3"
          type="primary"
          onClick={() => props.modalProps.modalProps.setModalOpen(true)}
        >
          Open Modal
        </Button>
        <PageWithModalContentCustomModal {...props.modalProps} />
      </div>
    </div>
  );
};
