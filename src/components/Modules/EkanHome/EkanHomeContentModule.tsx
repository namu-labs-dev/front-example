import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import MessageListContent from "~/components/Components/MessageListContent/MessageListContent";

import { MESSAGES } from "./data";

export const EkanHomeContentModule = () => {
  return (
    <div className="h-full pt-[1rem]">
      <div className="mb-[1.5rem] w-full px-[1.25rem]">
        <h2 className="text-[1.5rem] font-semibold">Messages</h2>
        <div className="mt-[1rem] flex w-[4rem] flex-col gap-[0.5rem]">
          <SVGAtom iconName="logo" width={65} height={65} />
          <p className="text-center text-base leading-[1rem]">Proxima</p>
        </div>
      </div>

      <div className="h-full w-full rounded-t-[1.75rem] bg-[#2C2D30] px-[1.25rem] pt-[1.25rem]">
        {MESSAGES.map((item, index) => {
          return <MessageListContent key={index} {...item} />;
        })}
      </div>
    </div>
  );
};
