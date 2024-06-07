import { Button } from "antd";

type Props = {
  title: string;
};

export const PageWithModalContentModule = (props: Props) => {
  return (
    <div className="m-[20px]">
      <div className="text-[20px]">{props.title}</div>

      <div>
        <Button className="my-3" type="primary">
          Open Modal
        </Button>
      </div>

      <div>
        <Button className="my-3" type="primary">
          Open Drawer
        </Button>
      </div>

      <div>
        <Button className="my-3" type="primary">
          Open DrawerPage
        </Button>
      </div>

      <div>
        <Button className="my-3" type="primary">
          Open Toast
        </Button>
      </div>
    </div>
  );
};
