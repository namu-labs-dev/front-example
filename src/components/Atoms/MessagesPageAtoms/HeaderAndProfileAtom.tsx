import React from "react";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  //   sampleLinks: string[];
};

export const HeaderAndProfileAtom = (props: Props) => {
  return (
    <div className='py-3'>
      <h5 className='mb-4 text-[28px] font-semibold'>Messages</h5>
      <div className='flex w-fit flex-col items-center gap-[10px]'>
        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-[#2C2D30]'>
          <SVGAtom iconName='star' width={46} height={46} />
        </div>
        <p className=''>Proxima</p>
      </div>
    </div>
  );
};
