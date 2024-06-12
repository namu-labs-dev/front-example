import Image from "next/image";
import React from "react";

interface Props {
  transactionDetails: { title: string; desc: string };
}

export const TransactionModal: React.FC<Props> = ({ transactionDetails }) => {
  return (
    <div
      className="absolute top-0 z-20 flex w-80 flex-col items-center justify-center gap-2 rounded-2xl p-8 text-white"
      style={{ backgroundColor: "rgba(44, 45, 48, 1)", top: "-40px" }}
    >
      <div className="text-center text-3xl">{transactionDetails.title}</div>

      <Image src="/svgs/cube.svg" alt="" width={150} height={150} />

      <div className="text-center">{transactionDetails.desc}</div>
    </div>
  );
};
