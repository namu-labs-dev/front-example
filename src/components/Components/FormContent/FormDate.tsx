import React from "react";
import { DatePicker, Form } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

type FormDateProps = {
  label: string;
  name: string;
};

const FormDate = ({ label, name }: FormDateProps) => {
  const today = new Date();
  dayjs.extend(customParseFormat);
  const dateFormat = "YYYY-MM-DD";

  return (
    <Form.Item label={label} name={name} className="text-base font-bold">
      <DatePicker
        defaultValue={dayjs(today.toISOString().split("T")[0], dateFormat)}
        className="w-full font-normal"
        style={{ height: 55.37, color: "#00000040" }}
      />
    </Form.Item>
  );
};

export default FormDate;
