import clsx from "clsx";
import React from "react";
type Props = {
  children: string | React.ReactNode;
  footerClass?: string
  footerChildClass?: string
};

//conditionally applying classnames using clsx to enhance reusability and dynamic styling
export const FooterAtom = (props: Props) => {
  return (
    <div className={clsx(props.footerClass, "flex h-full items-center justify-center bg-[#FFC96F]")}>
      <div className={clsx(props.footerClass, "")}>{props.children}</div>
    </div>
  );
};
