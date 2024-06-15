import { DatePicker, Form } from "antd";
import React from "react";
type Props = {
  label: string;
  name: string;
  date?: string;
};
const FormDate = (props: Props) => {
  const { label } = props;
  return (
    <Form.Item<Props>
      rules={[{ required: true, message: "Please select a date!" }]}
      label={label}
      name={"date"}
    >
      <DatePicker className="h-[55.37px] w-full" />
    </Form.Item>
  );
};

export default FormDate;
