import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
};

export const BsangsFooterAtom = (props: Props) => {
  return (
    <div className="flex h-full items-center justify-center bg-[#FFC96F]">
      <SVGAtom iconName="dollarCircle" />
      <SVGAtom iconName="message" />
      <SVGAtom iconName="wallet" />
      <SVGAtom iconName="history" />
      <div>{props.title}</div>
    </div>
  );
};
