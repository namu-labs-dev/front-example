import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
  onClickLeftIcon: () => void;
  onClickRightIcon: () => void;
};

export const BsangsHeaderAtom = (props: Props) => {
  return (
    <div className="flex h-[50px] items-center justify-between bg-black text-white">
      <div
        className="flex h-full w-[50px] cursor-pointer items-center justify-center"
        onClick={props.onClickLeftIcon}
      >
        <SVGAtom
          iconName="connectDapp"
          width={20}
          height={20}
          color="#BFBFBF"
          className="overflow-visible"
        />
      </div>

      <span className="flex h-fit w-fit items-start justify-center whitespace-nowrap text-center text-[16px] leading-[26px] text-[#fff]">
        {props.title}
      </span>

      <div
        className="flex h-full w-[50px] cursor-pointer items-center justify-center"
        onClick={props.onClickRightIcon}
      >
        <SVGAtom
          iconName="setting"
          width={20}
          height={20}
          color="#BFBFBF"
          className="overflow-visible"
        />
      </div>
    </div>
  );
};
