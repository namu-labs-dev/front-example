import { Button, Drawer } from "antd";

type Props = {
  title: string;
  onOpenModal: () => void;
  isDrawerOpen: boolean;
  onOpenDrawer: () => void;
  onCloseDrawer: () => void;
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
        <Button className="my-3" type="primary" onClick={props.onOpenDrawer}>
          Open Drawer
        </Button>
        <Drawer
          title="Drawer Title"
          placement="bottom"
          closable={true}
          open={props.isDrawerOpen}
          onClose={props.onCloseDrawer}
          width={400}
        />
      </div>

      <div>
        <Button className="my-3" type="primary" onClick={props.onOpenToast}>
          Open Toast
        </Button>
      </div>
    </div>
  );
};
