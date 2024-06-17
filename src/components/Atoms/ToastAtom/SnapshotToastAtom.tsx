import { useMemo } from "react";
import { useSnapshot } from "valtio";
import ToastStore from "~/store/ToastStore";
import { InfoToast } from "~/views/toast/InfoToast";

export const SnapshotToastAtom = () => {
  const { queue } = useSnapshot(ToastStore.state);

  const renderToastList = useMemo(() => {
    return queue.map((toast, index) => {
      switch (toast.view) {
        case "info":
          return <InfoToast message={toast.data.infoData ?? ""} key={index} />;
        default:
          return null;
      }
    });
  }, [queue]);

  return (
    <>
      {queue.length === 0 ? null : (
        <div className="pointer-events-none absolute left-[50%] top-12 z-[2000] flex h-fit w-full max-w-page translate-x-[-50%] flex-col-reverse items-center gap-3 ">
          {renderToastList}
        </div>
      )}
    </>
  );
};
