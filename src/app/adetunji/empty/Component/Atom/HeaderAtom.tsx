import React from "react";
import { MdDashboard, MdSettings } from "react-icons/md";

export default function HeaderAtom() {
  return (
    <div className='flex items-center justify-between text-white'>
      <MdDashboard className='size-6' />
      <h2 className='text-lg font-semibold'>Proxima OS</h2>
      <MdSettings className='size-6' />
    </div>
  );
}
