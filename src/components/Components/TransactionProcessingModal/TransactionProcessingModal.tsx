import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  isOpen: boolean;
  onClickBackground: () => void;
};

export const TransactionProcessingModal = (props: Props) => {
  return (
    <div
      className={`fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center ${
        props.isOpen ? "" : "hidden"
      }`}
    >
      <div
        className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-45"
        onClick={props.onClickBackground}
      ></div>
      <div className="relative rounded-[14px] bg-[#2C2D30] p-[20px]">
        <div className="flex flex-col items-center gap-[12px]">
          <span className="whitespace-pre-line text-center text-[24px] font-bold leading-[31px] text-white">
            {"Transaction\nprocessing"}
          </span>
          <SVGAtom iconName="cube" className="mx-auto" />
          <span className="whitespace-pre-line text-center text-[16px] leading-[26px] text-white">
            {
              "Uploading your transaction to the node.\nplease wait for a moment...\nThis may take up to 2 minutes."
            }
          </span>
        </div>
      </div>
    </div>
  );
};
