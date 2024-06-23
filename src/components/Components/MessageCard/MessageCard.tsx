import Image from "next/image";
import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { type messageProps } from "~/components/Modules/TestPage1/TestPage1ContentModule";

type Prop = {
  message: messageProps;
};

export default function MessageCard(props: Prop) {
  return (
    <div className='flex items-center gap-2 p-3'>
      <div>
        <SVGAtom
          iconName={props.message.from.toLowerCase() as "eth" | "nvir"}
          width={44}
          height={44}
        />
      </div>
      <div className='w-full'>
        <div className='flex justify-between'>
          <p className='font-bold'>{props.message.from}</p>
          <p className='text-sm'>{props.message.recievedAt}</p>
        </div>
        <div className='flex justify-between'>
          <p className='text-sm font-semibold'>
            User: {props.message.message.slice(0, 28)}...
          </p>
          {props.message.hasBadge && (
            <div className='flex h-5 w-5 items-center justify-center rounded-full bg-[#FF4D4F]'>
              <p className='text-[12px]'>{props.message.from.slice(0, 1)}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
