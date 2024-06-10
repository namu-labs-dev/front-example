import { useCallback, useMemo } from "react";
import { useSnapshot } from "valtio";
import ModalStore from "~/store/ModalStore";
import { TitleAndContentModal } from "~/views/modal/TitleAndContentModal";

export default function SnapshotModal() {
  const { open, view } = useSnapshot(ModalStore.state);

  const onClose = useCallback(() => {
    if (open) {
      ModalStore.close();
    }
  }, [open]);

  const componentView = useMemo(() => {
    switch (view) {
      case "TitleAndContent":
        return <TitleAndContentModal />;
      default:
        return null;
    }
  }, [view]);

  return (
    <>
      {open ? (
        <div className="fixed inset-0 z-[1000] box-border overflow-auto text-center">
          <div
            className="pointer fixed h-full w-full bg-black opacity-50"
            onClick={onClose}
          />
          {componentView}
        </div>
      ) : null}
    </>
  );
}
