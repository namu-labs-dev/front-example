import React from "react";
import { FooterModule, HeaderModule } from "~/components/Modules/David";

type Props = {
  children: React.ReactNode;
};

const TestPageTemplate = ({ children }: Props) => {
  return (
    <div className="relative h-full w-full">
      <HeaderModule />
      <div className="relative h-full bg-[#1F1F1F] pb-[60px] pt-[50px]">
        {children}
      </div>
      <FooterModule />
    </div>
  );
};

export default TestPageTemplate;
