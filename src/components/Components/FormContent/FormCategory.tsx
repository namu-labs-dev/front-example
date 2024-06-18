import React from "react";
import { Form, Select } from "antd";

type FormCategoryProps = {
  label: string;
  name: string;
  placeholder: string;
};

const FormCategory = ({ label, name, placeholder }: FormCategoryProps) => {
  return (
    <Form.Item label={label} name={name} className="text-base font-bold">
      <Select
        placeholder={placeholder}
        className="font-normal"
        style={{ height: 55.37, color: "#00000040" }}
      />
    </Form.Item>
  );
};

export default FormCategory;
