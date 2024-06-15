import { Button } from "antd";
import { useEffect, useState } from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { PageWithModalContentCustomModal } from "~/components/Components/PageWithModalContentCustomModal/PageWithModalContentCustomModal";
import { TestPage1ContentCustomModal } from "~/components/Components/TestPage1ContentCustomModal/TestPage1ContentCustomModal";
import { TestPage1Drawer } from "~/components/Components/TestPage1Drawer/TestPage1Drawer";
// import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  onOpenSnapshotDrawer: () => void;
  onOpenSnapshotModal: () => void;
  modalProps: React.ComponentProps<typeof TestPage1ContentCustomModal>;
  drawerProps: React.ComponentProps<typeof TestPage1Drawer>;
};

export const TestPage1ContentModule = (props: Props) => {
  useEffect(() => {
    props.drawerProps.drawerProps.setIsDrawerOpen(true);
  },[])
  return (
    <div className="flex h-full w-full flex-col  gap-5 ">
      <div className="">
        <div className="font-inter text-left text-[28px] font-semibold leading-[33.89px] text-white">
          Messages
        </div>
        <div
          className="top-[119px] h-[93px] w-[65px] flex-col justify-between pt-5"
          onClick={() =>
            props.drawerProps.drawerProps.setIsDrawerOpen(
              !props.drawerProps.drawerProps.isDrawerOpen,
            )
          }
        >
          <div className="flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[#2C2D30]">
            <SVGAtom
              iconName={"star"}
              width={46}
              height={46.13}
              color={"#00EC97"}
            />
          </div>
          <div className="font-inter flex justify-center pt-2 text-left align-middle text-[16px] font-normal leading-[19.38px] text-white">
            Proxima
          </div>
        </div>

        {/* <Button
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
        </Button> */}
        <TestPage1Drawer {...props.drawerProps} />
        <TestPage1ContentCustomModal {...props.modalProps} />
      </div>
    </div>
  );
};
