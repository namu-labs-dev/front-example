import { Button } from "antd";
import DrawerAtom from "~/components/Atoms/DrawerAtom/DrawerAtom";

type Props = {
  drawerProps: React.ComponentProps<typeof DrawerAtom>;
  title: string;
  description: string;
};

export const PageWithDrawerExamplesDrawer = (props: Props) => {
  return (
    <DrawerAtom {...props.drawerProps}>
      <div className="flex h-fit w-full flex-col gap-4 p-8">
        <h1 className="text-2xl">{props.title}</h1>
        <p>{props.description}</p>
        <Button onClick={() => props.drawerProps.setIsDrawerOpen(false)}>
          close
        </Button>
      </div>
    </DrawerAtom>
  );
};
