import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="px-[25px] py-7">
      <h1 className="text-4xl font-bold tracking-wider mt-10">Welcome</h1>
      <p>Welcome to Proxima OS.</p>
      <div className="flex items-center justify-center mt-20">
        <Image
          src="/sheild.png"
          alt="Home Page Sheild"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Home;
