import { Button } from "antd";
import { useSnapshot } from "valtio";
import { DrawerContainerAtom } from "~/components/Atoms/DrawerContainerAtom/DrawerContainerAtom";
import DrawerStore from "~/store/DrawerStore";

export type TitleAndContentDrawerProps = {
  title: string;
  description: string;
};

export const TitleAndContentDrawer = () => {
  const { data, open } = useSnapshot(DrawerStore.state);
  const { TitleAndContent } = data ?? {};

  return (
    <DrawerContainerAtom isOpen={open}>
      <div className="flex h-fit w-full flex-col gap-4 p-8">
        <h1 className="text-2xl">{TitleAndContent?.title}</h1>
        <p>{TitleAndContent?.description}</p>
        <Button onClick={() => DrawerStore.close()}>close</Button>
      </div>
    </DrawerContainerAtom>
  );
};
