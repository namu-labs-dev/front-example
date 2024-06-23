import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { type messageProps } from "~/components/Modules/TestPage1/TestPage1ContentModule";

type Prop = {
  message: messageProps;
};

export default function MessageCard(props: Prop) {
  return (
    <div>
      <div className='flex items-center p-3'>
        <SVGAtom
          iconName={props.message.from.toLowerCase() as "eth" | "nvir"}
          width={44}
          height={44}
        />
      </div>
    </div>
  );
}
