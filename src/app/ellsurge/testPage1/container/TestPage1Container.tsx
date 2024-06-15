import { useRouter } from "next/navigation";
import { useState } from "react";
import  { Testpage1Template } from "~/components/Templates/TestPage1/TestPage1Template";
import DrawerStore from "~/store/DrawerStore";
import ModalStore from "~/store/ModalStore";

export const TestPage1Container = () => {
  const router = useRouter();
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const TestPage1TemplateProps: React.ComponentProps<typeof Testpage1Template> =
    {
      testPage1HeaderModuleProps: {
        title: "Proxima OS",
        onClickLeftIcon: () => setIsDrawerOpen(!isDrawerOpen),
        onClickRightIcon: () => setIsCustomModalOpen(true),
      },
      testPage1ContentModuleProps: {
        onOpenSnapshotDrawer: () => {
          DrawerStore.open("TitleAndContent", {
            TitleAndContent: {
              title: "Snapshot Drawer Title",
              description: "Snapshot Drawer Description",
            },
          });
        },
        onOpenSnapshotModal: () =>
          ModalStore.open("TitleAndContent", {
            TitleAndContent: {
              title: `Transaction\nprocessing`,
              description: "Modal Content",
            },
          }),
        drawerProps: {
          drawerProps: {
            isDrawerOpen,
            setIsDrawerOpen,
          },
          title: "",
          description: "Drawer Description",
        },
        modalProps: {
          modalProps: {
            isModalOpen: isCustomModalOpen,
            setModalOpen: setIsCustomModalOpen,
          },
          title: `Transaction\nprocessing`,
          description: `Uploading your transaction to the node.\n please wait for a moment...\nThis may take up to 2 minutes.`,
        },
      },
      homeFooterModuleProps: { title: "HomeFooterModule" },
    };

  return <Testpage1Template {...TestPage1TemplateProps} />;
};
