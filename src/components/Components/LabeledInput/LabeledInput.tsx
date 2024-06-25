import { Input } from "antd";

type Props = {
  label: string;
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
};

export const LabeledInput = (props: Props) => {
  return (
    <div className="flex flex-col gap-[9px]">
      <span className="text-[16px] font-medium leading-[20px]">
        {props.label}
      </span>
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        className="h-[56px] w-full rounded-[9px] border-[1px] border-[#D9D9D9]"
        size="large"
      />
    </div>
  );
};
