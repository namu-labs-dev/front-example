import React from "react";
import { Form, Input } from "antd";

type FormTitleProps = {
  label: string;
  name: string;
  placeholder: string;
};

const FormTitle = ({ label, name, placeholder }: FormTitleProps) => {
  return (
    <Form.Item label={label} name={name} className="text-base font-bold">
      <Input
        placeholder={placeholder}
        className="font-normal"
        style={{ height: 55.37, color: "#00000040" }}
      />
    </Form.Item>
  );
};

export default FormTitle;
