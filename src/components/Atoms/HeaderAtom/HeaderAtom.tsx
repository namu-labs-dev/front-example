import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
};

export const HeaderAtom = (props: Props) => {
  return (
    <div className="flex h-[50px] items-center justify-between bg-red-500">
      {/* Sample using custom svg */}
      <div className="flex h-full w-[50px] items-center justify-center">
        <SVGAtom iconName="arrowRight" width={20} height={20} color="#BFBFBF" />
      </div>

      <div className="">{props.title}</div>

      {/* Sample using Antd icon */}
      <div className="flex h-full w-[50px] items-center justify-center">
        <SettingOutlined className="!text-gray-header cursor-pointer text-[20px]" />
      </div>
    </div>
  );
};
