


import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";
import clsx from "clsx";


type Props = {
  title: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
  className?:string
  iconClass?: string,
  textClass?: string
  headerClass?: string
};

// conditionally determining which class names to apply based on component state using clsx

export const HeaderAtom = (props: Props) => {
  return (
    <div className={clsx(props.headerClass, "relative flex h-full w-full items-center justify-center bg-[#FFC96F] ")}>
      {/* Sample using custom svg */}
      {props.onClickLeftIcon && (
        <div
          className={clsx(props.iconClass, "absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center")}
          onClick={props.onClickLeftIcon}
        >
          <SVGAtom iconName="arrowLeft" width={20} height={20}  />
        </div>
      )}

      <div className={clsx(props.textClass, "")}>{props.title}</div>

      {/* Sample using Antd icon */}
      {props.onClickRightIcon && (
        <div
          className={clsx(props.iconClass, "absolute right-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center")}
          onClick={() => console.log("Antd icon clicked")}
        >
          <SettingOutlined className="!text-gray-header cursor-pointer text-[20px]" />
        </div>
      )}
    </div>
  );
};
