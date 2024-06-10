import { Button } from "antd";
import { PageWithDrawerExamplesDrawer } from "~/components/Components/PageWithDrawerExamplesDrawer/PageWithDrawerExamplesDrawer";

type Props = {
  onOpenSnapshotDrawer: () => void;
  drawerProps: React.ComponentProps<typeof PageWithDrawerExamplesDrawer>;
};

export const PageWithDrawerExamplesModule = (props: Props) => {
  return (
    <div className="flex h-full w-full justify-around">
      <div>
        <Button
          className="my-3"
          type="primary"
          onClick={props.onOpenSnapshotDrawer}
        >
          Open Snapshot Drawer
        </Button>
      </div>

      <div>
        <Button
          className="my-3"
          type="primary"
          onClick={() => props.drawerProps.drawerProps.setIsDrawerOpen(true)}
        >
          Open Drawer
        </Button>
        <PageWithDrawerExamplesDrawer {...props.drawerProps} />
      </div>
    </div>
  );
};
