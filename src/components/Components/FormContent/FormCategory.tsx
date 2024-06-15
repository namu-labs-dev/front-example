import { Form, Select, type SelectProps } from "antd";
import React from "react";
type Props = {
  label?: string;
  category?: SelectProps["options"];
  name?: string;
};

const FormCategory = (props: Props) => {
  const { category, label } = props;

  return (
    <Form.Item<Props>
      label={label}
      name={"category"}
      rules={[{ required: true, message: "Please select a category!" }]}
    >
      <Select options={category} style={{ height: 55.37 }} />
    </Form.Item>
  );
};

export default FormCategory;
