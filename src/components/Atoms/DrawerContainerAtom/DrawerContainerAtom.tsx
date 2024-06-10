import cn from "classnames";
import { type PropsWithChildren } from "react";

type Props = {
  isOpen: boolean;
  style?: React.CSSProperties;
  className?: string;
};

export const DrawerContainerAtom = (props: PropsWithChildren<Props>) => {
  return (
    <div
      className={cn(
        `max-w-page fixed bottom-0 left-1/2 z-[1] h-[90%] w-full translate-x-[-50%] overflow-hidden overflow-y-scroll rounded-t-[30px] bg-white shadow-2xl transition-transform duration-300 ${props.isOpen ? "drawer-slide-up" : "drawer-slide-down"}`,
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};
