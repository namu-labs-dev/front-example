import React from "react";
import { TESTPAGE1CONTAINER } from "~/components/Containers";
import { NavProvider } from "~/providers";

type Props = {};

const Home = (props: Props) => {
  return (
    <NavProvider>
      <TESTPAGE1CONTAINER />
    </NavProvider>
  );
};

export default Home;
