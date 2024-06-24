import cn from "classnames";
import { type PropsWithChildren } from "react";

type Props = {
  style?: React.CSSProperties;
  className?: string;
};

export const ModalContainerDark = (props: PropsWithChildren<Props>) => {
  return (
    <div
      className={cn(
        "relative left-1/2 top-1/2 z-[1] h-fit w-fit translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-[14px] bg-slate-50 shadow-lg ",
        props.className
      )}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
