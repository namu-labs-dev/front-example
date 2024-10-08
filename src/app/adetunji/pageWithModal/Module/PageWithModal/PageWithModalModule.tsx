import { Button } from "antd";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useModalLogic } from "~/app/adetunji/pageWithModal/container/page";
import Modal from "../../Atom/Modal";
import { BiLoader } from "react-icons/bi";

export default function PageWithModalModule() {
  const { setIsModalOpen, isModalOpen } = useModalLogic();
  return (
    <div className='h-full '>
      <div className='h-[39%] bg-black px-6 pb-10'>
        <h2 className='text-xl font-semibold text-white'>Messages</h2>
        <FaStar className='mt-5 size-16 rounded-full bg-neutral-600 p-3 text-green-600 shadow-neutral-900 outline-green-600' />
        <p className='mt-2 text-lg font-semibold text-white'>Proxima</p>
      </div>

      <div className='mx-auto -mt-5 flex h-[70%] justify-center rounded-3xl  bg-neutral-700'>
        <Button onClick={() => setIsModalOpen(true)} type='primary'>
          Open Modal
        </Button>
      </div>

      {isModalOpen ? (
        <div className='fixed inset-0 z-[1000] box-border overflow-auto text-center'>
          <div
            className='pointer fixed h-full w-full bg-black opacity-50'
            onClick={() => setIsModalOpen(false)}
          />
          <Modal />
        </div>
      ) : null}
    </div>
  );
}
