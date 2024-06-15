import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import MessageListContent from "~/components/Components/MessageListContent/MessageListContent";
import { MESSAGE_LIST } from "./list";

export const JehoHomeContentModule = () => {
  return (
    <div className="h-full pt-[16px]">
      <div className="mb-[24px] w-full px-[20px]">
        <div className="mt-[19px] flex w-[65px] flex-col gap-[8px]">
          <SVGAtom iconName="logo" width={65} height={65} />
          <p className="text-center font-normal leading-[19.36px]">Proxima</p>
        </div>
      </div>

      <div className="h-full w-full rounded-t-[30px] bg-[#2C2D30] px-[20px] pt-[20px]">
        {MESSAGE_LIST.map((item, index) => {
          return <MessageListContent key={index} {...item} />;
        })}
      </div>
    </div>
  );
};
