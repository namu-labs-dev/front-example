import React from "react";
import { useContentInfo } from "../container/page";

export default function EmptyContentAtom() {
  const { title, desc1, desc2 } = useContentInfo();
  return (
    <div>
      <h2 className='text-center text-xl font-semibold'>{title}</h2>
      <div className='px-5'>
        <p className='mt-2  text-sm font-semibold'>{desc1}</p>
        <p className='mt-2 text-sm font-semibold'>{desc2}</p>
      </div>
    </div>
  );
}
