import { DatePicker } from "antd";

type Props = {
  label: string;
  placeholder: string;
  value?: string;
  onChange: (date: any, dateString: string | string[]) => void;
};

export const LabeledDatePicker = (props: Props) => {
  return (
    <div className="flex flex-col gap-[9px]">
      <span className="text-[16px] font-medium leading-[20px]">
        {props.label}
      </span>
      <DatePicker
        className="h-[48px] w-full rounded-[9px] border-[1px] border-[#D9D9D9]"
        size="large"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
