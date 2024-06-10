import { useState } from "react";
import { PageWithDrawerTemplate } from "~/components/Templates/PageWithDrawer/PageWithDrawerTemplate";
import DrawerStore from "~/store/DrawerStore";

export const PageWithDrawerContainer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const pagewithdrawerTemplateProps: React.ComponentProps<
    typeof PageWithDrawerTemplate
  > = {
    pageWithDrawerHeaderModuleProps: {
      headerProps: {
        title: "PageWithDrawerHeaderModule",
      },
    },
    pageWithDrawerExamplesModuleProps: {
      onOpenSnapshotDrawer: () => {
        DrawerStore.open("TitleAndContent", {
          TitleAndContent: {
            title: "Snapshot Drawer Title",
            description: "Snapshot Drawer Description",
          },
        });
      },
      drawerProps: {
        drawerProps: {
          isDrawerOpen,
          setIsDrawerOpen,
        },
        title: "Drawer Title",
        description: "Drawer Description",
      },
    },
  };

  return <PageWithDrawerTemplate {...pagewithdrawerTemplateProps} />;
};
