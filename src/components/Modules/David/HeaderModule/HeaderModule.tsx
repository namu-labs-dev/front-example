"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Modal from "~/components/Atoms/Modal/Modal";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { useNavContext } from "~/providers";
import TransactionPendingImage from "/public/pngs/transaction-pending.png";

const HeaderModule: React.FC = () => {
  const { activeIndex } = useNavContext();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const router = useRouter();
  return (
    <div className=" absolute top-0 z-[1000] flex h-[50px] w-full items-center justify-between bg-black px-[20px]">
      <SVGAtom iconName="homeIcon" className="cursor-pointer" />
      <p
        className="cursor-pointer text-center text-base font-medium leading-[22px] text-white"
        onClick={() => router.push("/david/testPage1")}
      >
        Proxima OS
      </p>
      <SVGAtom
        iconName="settingsIcon"
        className="cursor-pointer"
        onClick={() => {
          activeIndex === 2 && setIsModalOpen(true);
        }}
      />
      <Modal
        isModalOpen={isModalOpen}
        setModalOpen={setIsModalOpen}
        containerClassName="!bg-[#2C2D30]"
      >
        <div className="flex h-[358px] w-[340px] flex-col items-center rounded-[14px] p-[24px] text-white">
          <p className="w-full text-center text-[24px] font-[700] leading-[31px]">
            Transaction <br />
            processing
          </p>
          <Image
            src={TransactionPendingImage}
            alt="Transaction pending image"
            width={267}
            height={250}
            className="my-[12px]"
          />
          <p className="text-center text-[16px] font-[400] leading-[26px]">
            Uploading your transaction to the node <br />
            please wait for a moment... <br />
            This may take up to 2 minutes.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default HeaderModule;
