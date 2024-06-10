import { Button } from "antd";
import { PageWithModalContentCustomModal } from "~/components/Components/PageWithModalContentCustomModal/PageWithModalContentCustomModal";

type Props = {
  title: string;
  onOpenModal: () => void;
  customModalProps: React.ComponentProps<
    typeof PageWithModalContentCustomModal
  >;
  onOpenDrawer: () => void;
  onOpenToast: () => void;
};

export const PageWithModalContentModule = (props: Props) => {
  return (
    <div className="m-[20px]">
      <div className="text-[20px]">{props.title}</div>

      <div>
        <Button className="my-3" type="primary" onClick={props.onOpenModal}>
          Open Modal
        </Button>
      </div>

      <div>
        <Button
          className="my-3"
          type="primary"
          onClick={() => props.customModalProps.modalProps.setModalOpen(true)}
        >
          Open Custom Modal
        </Button>
        <PageWithModalContentCustomModal {...props.customModalProps} />
      </div>

      <div>
        <Button className="my-3" type="primary" onClick={props.onOpenDrawer}>
          Open Drawer
        </Button>
      </div>

      <div>
        <Button className="my-3" type="primary" onClick={props.onOpenToast}>
          Open Toast
        </Button>
      </div>
    </div>
  );
};
