import { Select } from "antd";

type Props = {
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  placeholder: string;
  onChange: (value: string) => void;
  value?: string;
};

export const LabeledSelect = (props: Props) => {
  return (
    <div className="flex flex-col gap-[9px]">
      <span className="text-[16px] font-medium leading-[20px]">
        {props.label}
      </span>
      <Select
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className="h-[56px] w-full rounded-[9px] border-[1px] border-[#D9D9D9]"
        variant="borderless"
        size="large"
      >
        {props.options.map((option) => (
          <Select.Option key={option.value} value={option.value}>
            {option.label}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};
