import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const HeaderAtom = (props: Props) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-[#FFFF]">
      {/* Sample using custom svg */}
      {props.onClickLeftIcon && (
        <div
          className="absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center"
          onClick={props.onClickLeftIcon}
        >
          <SVGAtom iconName="arrowLeft" width={20} height={20} color="black" />
        </div>
      )}

      <div className="font-inter text-center text-[18.68px] font-bold leading-[2.376px] text-black">
        {props.title}
      </div>

      {/* Sample using Antd icon */}
      {props.onClickRightIcon && (
        <div
          className="absolute right-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center"
          onClick={() => console.log("Antd icon clicked")}
        >
          <SettingOutlined className="!text-gray-header cursor-pointer text-[20px]" />
        </div>
      )}
    </div>
  );
};
