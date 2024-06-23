import React from "react";
import { CiSettings } from "react-icons/ci";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[25px] py-7 sticky top-0 left-o w-full">
        <img
            src="/Icon.png"
            alt="Processing"
            className="home"
          />
      <span>Proxima OS</span>
      <Link href="/settings">
        <CiSettings size={25} />
      </Link>
    </nav>
  );
};

export default Navbar;
