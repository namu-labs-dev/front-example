"use client";
import React from "react";
import Image from "next/image";
import { messages, Message } from "../mockData"; 




const Messages: React.FC = () => {
  const handleClick = (message: Message): void => {
    message.toggleClicked();
  };

  return (
    <div className="flex flex-col items-start justify-between w-full">
      <div className="px-[25px] py-7 h-[25%]">
        <h1 className="text-4xl font-bold tracking-wider">Messages</h1>
        <Image
          src="/logo.png"
          alt="Logo"
          width={65}
          height={93}
          className="mt-5"
        />
      </div>
      <div className="bg-[#2C2D30] w-full min-h-[50vh] rounded-t-3xl">
        <div className="flex flex-col items-start justify-start mt-20 w-full h-[150px]">
              
          {messages.map((message, index) => (
            <div
              key={index}
              className="flex items-center justify-between h-full w-full px-5 py-3 mb-2">
                
              <div className="flex items-center gap-3">
                <Image
                  src={message.iconImg}
                  alt="Ethereum"
                  width={40}
                  height={40}
                />{" "}
                
                <div className="flex flex-col">
                  <span className="text-white">{message.iconText}</span>
                  <span className="text-white/50 text-sm truncate">
                    {message.text}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                {!message.clicked && (
                  <span className="text-white text-sm mr-3 -mt-4 text-[11px] bg-red-500 rounded-full w-[15px] h-[15px] flex items-center justify-center">
                    N
                  </span>
                )}
                <span className="text-gray-400 text-sm">{message.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
