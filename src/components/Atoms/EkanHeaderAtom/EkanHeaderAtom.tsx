import { SettingOutlined } from "@ant-design/icons";

import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const EkanHeaderAtom = ({
  title,
  onClickLeftIcon,
  onClickRightIcon,
}: Props) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-[#1F1F1F] text-white">
      {onClickLeftIcon && (
        <div
          className="absolute left-0 z-[1] flex w-[3rem] cursor-pointer items-center justify-center"
          onClick={onClickLeftIcon}
        >
          <SVGAtom iconName="outLink" width={20} height={20} color="white" />
        </div>
      )}

      <div>{title}</div>

      {onClickRightIcon && (
        <div
          className="absolute right-0 z-[1] flex w-[3rem] cursor-pointer items-center justify-center"
          onClick={onClickRightIcon}
        >
          <SettingOutlined className="text-[1.25rem]" />
        </div>
      )}
    </div>
  );
};
