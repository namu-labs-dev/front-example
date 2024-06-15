import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
};

export const FooterAtom = (props: Props) => {
  return (
    <div className="z-[2] flex h-full  items-center justify-between bg-[#262626]">
      <div className="  flex h-[60px] w-[100px] cursor-pointer items-center justify-center gap-[10px] px-[28px] py-[18px] ">
        <SVGAtom iconName={"dollar"} width={24} height={24} color={"#8C8C8C"} />
      </div>
      <div className="  flex h-[60px] w-[100px] cursor-pointer items-center justify-center gap-[10px] px-[28px] py-[18px] ">
        <SVGAtom
          iconName={"message"}
          width={24}
          height={24}
          color={"#8C8C8C"}
        />
      </div>
      <div className="  nav-active flex h-[60px] w-[100px] cursor-pointer items-center justify-center gap-[10px] px-[28px] py-[18px]">
        <SVGAtom iconName={"wallet"} width={24} height={24} color={"#8C8C8C"} />
      </div>
      <div className="  flex h-[60px] w-[100px] cursor-pointer items-center justify-center gap-[10px] px-[28px] py-[18px] ">
        <SVGAtom
          iconName={"history"}
          width={24}
          height={24}
          color={"#8C8C8C"}
        />
      </div>
    </div>
  );
};
