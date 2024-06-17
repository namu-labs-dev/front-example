import { useEffect } from "react";

type Props = {
  onClickToastButton: () => void;
};

export const TestPage2ToastModule = (props: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.onClickToastButton();
    }, 0);

    // Cleanup the timer if the component unmounts before the timer completes
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this runs only once

  return (<></>);
};
