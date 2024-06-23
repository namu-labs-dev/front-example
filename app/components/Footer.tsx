"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CiDollar } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { CiWallet } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { usePathname, useRouter } from "next/navigation";
import Modal from "./Modal"; 

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const getLinkStyle = (path: string) => {
    return pathname === path ? "border-t-4 border-green-500" : "";
  };

  const handleTimerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/wallets");
    setTimeout(() => {
      setIsModalOpen(true);
    }, 100); // Adjust the delay as needed
  };

  return (
    <>
      <footer className="grid grid-cols-4 place-content-between place-items-center px-[25px] py-7 w-full absolute bottom-0">
        <Link
          href="/"
          className={`${getLinkStyle("/")} w-full pt-5 flex items-center justify-center`}
        >
          <CiDollar size={25} />
        </Link>
        <Link
          href="/messages"
          className={`${getLinkStyle("/messages")} w-full pt-5 flex items-center justify-center`}
        >
          <AiOutlineMessage size={25} />
        </Link>
        <a
          href="#"
          onClick={handleTimerClick}
          className={`${getLinkStyle("/wallets")} w-full pt-5 flex items-center justify-center`}
        >
          <CiWallet size={25} />
        </a>
        <a
          href="/timer"
          className={`${getLinkStyle("/timer")} w-full pt-5 flex items-center justify-center`}
        >
          <CiTimer size={25} />
        </a>
       
      </footer>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Footer;
