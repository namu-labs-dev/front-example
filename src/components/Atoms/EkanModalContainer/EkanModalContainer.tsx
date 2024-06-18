import { useEffect, useRef, type PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import cn from "classnames";

type StyledModalProps = {
  style?: React.CSSProperties;
  className?: string;
  callback: () => void;
} & PropsWithChildren;

export const EkanModalContainer = ({ children }: PropsWithChildren) => {
  return createPortal(
    <div className="fixed inset-0 z-[1000] box-border overflow-auto text-center">
      <div className="pointer fixed h-full w-full bg-black opacity-50" />
      {children}
    </div>,
    document.body,
  );
};

const StyledModal = ({ className, callback, children }: StyledModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        callback();
      }
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback]);

  return (
    <div
      className={cn(
        "fixed left-1/2 top-1/2 z-50 h-[398px] w-full max-w-[350px] translate-x-[-50%] translate-y-[-50%] rounded-[1rem]  bg-[#2C2D30] opacity-100 shadow-lg ",
        className,
      )}
      ref={ref}
    >
      {children}
    </div>
  );
};

const Title = ({ children }: PropsWithChildren) => {
  return <p className="text-3xl text-white">{children}</p>;
};

const Body = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center gap-[1.5rem]">{children}</div>
  );
};

EkanModalContainer.StyledModal = StyledModal;
EkanModalContainer.Title = Title;
EkanModalContainer.Body = Body;
