import React from "react";
import { TESTPAGE2CONTAINER } from "~/components/Containers";
import { NavProvider } from "~/providers";

type Props = {};

const HomeOnClickSettingsIcon = (props: Props) => {
  return (
    <NavProvider>
      <TESTPAGE2CONTAINER />
    </NavProvider>
  );
};

export default HomeOnClickSettingsIcon;
