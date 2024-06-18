import { Loader2Icon } from "lucide-react";
import React from "react";

type Props = {};

const LoadingAtom = (props: Props) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <span className="absolute inset-0 bg-black opacity-50"></span>
      <Loader2Icon className="z-10 h-20 w-20 animate-spin text-white" />
    </div>
  );
};

export default LoadingAtom;
