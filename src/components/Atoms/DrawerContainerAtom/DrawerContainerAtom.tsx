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
        `fixed bottom-[60px] left-1/2 h-[67%] w-full max-w-page translate-x-[-50%] overflow-hidden overflow-y-scroll rounded-t-[30px] bg-[#2C2D30] shadow-2xl transition-transform duration-300 ${props.isOpen ? "drawer-slide-up" : "drawer-slide-down"}`,
        props.className,
      )}
    >
      {props.children}
    </div>
  );
};
