import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";
import type * as svgs from "public/svgs";

type Props = {
  title: string;
  color?: string;
  bgColor?: string;
  leftIcon?: keyof typeof svgs;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const HeaderAtom = (props: Props) => {
  return (
    <div
      className={`relative flex h-full w-full items-center justify-center bg-${(props.color && props.bgColor) ?? "[#FFC96F]"} `}
    >
      {/* Sample using custom svg */}
      {props.onClickLeftIcon && (
        <div
          className="absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center"
          onClick={props.onClickLeftIcon}
        >
          <SVGAtom
            iconName={props.leftIcon ?? "arrowLeft"}
            width={20}
            height={20}
            color={props.color ?? "black"}
          />
        </div>
      )}

      <div className={`${props.color && 'white'} header-text`}>{props.title}</div>

      {/* Sample using Antd icon */}
      {props.onClickRightIcon && (
        <div
          className="absolute right-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center"
          onClick={props.onClickRightIcon}
        >
          <SettingOutlined
            className={`!text-gray-header cursor-pointer text-[20px] ${props.color}`}
            style={{ color: props.color && "#BFBFBF" }}
          />
        </div>
      )}
    </div>
  );
};
