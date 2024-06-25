import { Button } from "antd";

type Props = {
  text: string;
  onClick: () => Promise<void> | void;
};

export const BsangsVoteFooterModule = (props: Props) => {
  return (
    <div className="mt-[10px] flex min-h-[82px] items-center justify-center px-[20px] py-[14px]">
      <Button
        className="min-h-full w-full rounded-[8px]"
        onClick={props.onClick}
        type="primary"
      >
        <span className="text-[20px] font-normal">{props.text}</span>
      </Button>
    </div>
  );
};
