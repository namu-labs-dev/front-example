import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
  bg?: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const HeaderAtom = (props: Props) => {
  return (
    <div className={`relative flex h-full w-full items-center justify-center ${props.bg ? `bg-${props.bg}` : 'bg-black'}`}>
      {/* Sample using custom svg */}
      {props.onClickLeftIcon && (
        <div
          className='absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={props.onClickLeftIcon}
        >
          <SVGAtom iconName='option' width={20} height={20} color='#BFBFBF' />
        </div>
      )}

      <div className={`${props.bg ? 'text-black text-lg font-bold' : 'text-white'}`}>{props.title}</div>

      {/* Sample using Antd icon */}
      {props.onClickRightIcon && (
        <div
          className='absolute right-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={props.onClickRightIcon}
        >
          <SettingOutlined
            color='#BFBFBF'
            className='cursor-pointer text-[20px] !text-[#BFBFBF]'
          />
        </div>
      )}
    </div>
  );
};
