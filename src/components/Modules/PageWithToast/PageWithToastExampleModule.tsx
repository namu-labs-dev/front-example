import { Button } from "antd";

type Props = {
  onClickToastButton: () => void;
};

export const PageWithToastExampleModule = (props: Props) => {
  return <Button onClick={props.onClickToastButton}>Show Toast Message</Button>;
};
