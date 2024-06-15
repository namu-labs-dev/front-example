import { Form, Input } from "antd";
import React from "react";

type Props = {
  label: string;
  name: string;
  title?: string;
};

const FormTitle = (props: Props) => {
  const { label, name } = props;
  return (
    <Form.Item<Props>
      label={label}
      name={"title"}
      rules={[{ required: true, message: "Please input a title!" }]}
    >
      <Input style={{ height: 55.37 }} />
    </Form.Item>
  );
};

export default FormTitle;
