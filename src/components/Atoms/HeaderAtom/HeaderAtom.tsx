import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";
import { Header } from "antd/es/layout/layout";

type Props = {
  title: string;
};

export const HeaderAtom = (props: Props) => {
  return (
    <div className="flex h-full items-center justify-between bg-[#FFC96F]">
      {/* Sample using custom svg */}
      <div
        className="flex h-full w-[50px] cursor-pointer items-center justify-center"
        onClick={() => console.log("svg clicked")}
      >
        <SVGAtom iconName="arrowLeft" width={20} height={20} color="#BFBFBF" />
      </div>

      <div className="">{props.title}</div>

      {/* Sample using Antd icon */}
      <div
        className="flex h-full w-[50px] cursor-pointer items-center justify-center"
        onClick={() => console.log("Antd icon clicked")}
      >
        <SettingOutlined className="!text-gray-header cursor-pointer text-[20px]" />
      </div>
    </div>
  );
};
