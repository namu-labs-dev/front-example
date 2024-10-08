import React from "react";
import HomeTemplate from "../Templates/Home/HomeTemplate";

export default function HomeContainer() {
  return <HomeTemplate />;
}

// In order to enhance the business logic, i feel if we implement
// the business logic in a function and pass it as a hook to the component
// it will be needed ,this will remove prop drilling from the application
// I also added this to the modalpage

export function useHomeLogic() {
  const homeDesc = "User: namulabs is a fantastic company...";
  const firstContentTitle = "ETH";
  const secondContentTitle = "Nvir";

  return {
    homeDesc,
    firstContentTitle,
    secondContentTitle,
  };
}
