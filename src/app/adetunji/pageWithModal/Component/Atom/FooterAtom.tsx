import React from "react";
import { BiComment, BiDollarCircle, BiHistory, BiWallet } from "react-icons/bi";

export default function FooterAtom() {
  return (
    <div className='flex items-center justify-between  text-white'>
      <BiDollarCircle className='size-6' />
      <BiComment className='size-6' />
      <BiWallet className='size-6' />
      <BiHistory className='size-6' />
    </div>
  );
}
