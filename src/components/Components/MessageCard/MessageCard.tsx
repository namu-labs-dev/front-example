import Image from "next/image";
import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { type messageProps } from "~/components/Modules/TestPage1/TestPage1ContentModule";

type Prop = {
  message: messageProps;
};

export default function MessageCard(props: Prop) {
  return (
    <div>
      <div className='flex items-center gap-2 p-3'>
        <SVGAtom
          iconName={props.message.from.toLowerCase() as "eth" | "nvir"}
          width={44}
          height={44}
        />
        <div className='w-full'>
          <div className='flex justify-between'>
            <p className='font-bold'>{props.message.from}</p>
            <p className='text-sm'>{props.message.recievedAt}</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-sm font-semibold'>{props.message.message}</p>
            <p className='text-sm'>{props.message.recievedAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
