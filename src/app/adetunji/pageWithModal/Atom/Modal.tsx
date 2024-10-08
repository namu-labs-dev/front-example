import React from "react";
import { useModalLogic } from "../container/page";
import { BiLoader } from "react-icons/bi";

export default function Modal() {
  const { modalDialogDesc, modalDialogTitle } = useModalLogic();
  return (
    <div className='absolute left-0 right-0 top-1/4  mx-auto flex h-fit w-3/4 flex-col items-center justify-center rounded-3xl bg-neutral-700 p-4 text-white sm:w-2/3 md:w-1/2 lg:w-1/3'>
      <p className='mx-auto w-2/3 text-center text-2xl font-semibold'>
        {modalDialogTitle}
      </p>
      <BiLoader className='size-44' />
      <p className='mx-auto w-3/4 text-center text-sm'>{modalDialogDesc}</p>
    </div>
  );
}
