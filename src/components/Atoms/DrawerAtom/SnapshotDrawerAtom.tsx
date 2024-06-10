import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSnapshot } from "valtio";
import DrawerStore from "~/store/DrawerStore";
import { TitleAndContentDrawer } from "~/views/drawer/TitleAndContentDrawer";

export default function SnapshotDrawerAtom() {
  const { open, view } = useSnapshot(DrawerStore.state);
  const [isAnimating, setIsAnimating] = useState(false);
  const wasOpenRef = useRef(open);

  const onClose = useCallback(() => {
    DrawerStore.close();
    setIsAnimating(true);
  }, []);

  useEffect(() => {
    if (wasOpenRef.current !== open) {
      if (open) {
        setIsAnimating(false);
      } else {
        setIsAnimating(true);
        const timeoutId = setTimeout(() => {
          setIsAnimating(false);
        }, 300);
        return () => clearTimeout(timeoutId);
      }
    }
    wasOpenRef.current = open;
  }, [open]);

  const componentView = useMemo(() => {
    switch (view) {
      case "TitleAndContent":
        return <TitleAndContentDrawer />;
      default:
        return null;
    }
  }, [view]);

  return (
    <>
      {open || isAnimating ? (
        <div className="fixed inset-0 z-[1000] box-border overflow-auto text-center">
          <div
            className={`fixed h-full w-full cursor-pointer bg-black opacity-50 transition-opacity duration-500 ease-in-out ${isAnimating ? "animate-fade-out" : "animate-fade-in"}`}
            onClick={() => onClose()}
          />
          {componentView}
        </div>
      ) : null}
    </>
  );
}
