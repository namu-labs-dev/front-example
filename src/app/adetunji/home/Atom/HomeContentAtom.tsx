import React from "react";
import { FaEthereum, FaStar } from "react-icons/fa";
import { SiNovu } from "react-icons/si";
import { useHomeLogic } from "../container/HomeContainer";

export default function HomeContentAtom() {
  const { firstContentTitle, secondContentTitle, homeDesc } = useHomeLogic();
  return (
    <div className='h-full '>
      <div className='h-[39%] bg-black px-6 pb-10'>
        <h2 className='text-xl font-semibold text-white'>Messages</h2>
        <FaStar className='mt-5 size-16 rounded-full bg-neutral-600 p-3 text-green-600 shadow-neutral-900 outline-green-600' />
        <p className='mt-2 text-lg font-semibold text-white'>Proxima</p>
      </div>

      <div className='-mt-3 h-2/3 rounded-t-2xl bg-neutral-700'>
        <div className='flex items-center space-x-2 px-6 pt-6'>
          <div className=''>
            <FaEthereum className='size-16 rounded-full border-2 bg-blue-600 p-2 text-white' />
          </div>
          <div className='flex w-full justify-between'>
            <div>
              <h2 className='text-lg font-semibold text-white'>
                {firstContentTitle}
              </h2>
              <p className='text-sm text-slate-300'>{homeDesc}</p>
            </div>

            <div className='flex flex-col items-end justify-end'>
              <p className='text-sm text-slate-300'>8:42 AM</p>
              <p className='flex size-7 justify-center rounded-full bg-red-600 p-1 text-sm text-white'>
                N
              </p>
            </div>
          </div>
        </div>

        <div className='flex items-center space-x-2 px-6 pt-6'>
          <div className=''>
            <SiNovu className='size-16 rounded-full border-2 bg-blue-600 p-2 text-white' />
          </div>
          <div className='flex w-full justify-between'>
            <div>
              <h2 className='text-lg font-semibold text-white'>
                {secondContentTitle}
              </h2>
              <p className='text-sm text-slate-300'>{homeDesc}</p>
            </div>

            <div>
              <p className='text-sm text-slate-300'>8:42 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
