import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
type Props = {
  label: string;
  name: string;
  description?: string;
};
const FormDescription = (props: Props) => {
  const { label } = props;
  return (
    <Form.Item<Props>
      label={label}
      name={"description"}
      rules={[{ required: true, message: "Please write a description!" }]}
    >
      <TextArea
        style={{ height: 176 }}
        placeholder="Please write down a description of the event"
      />
    </Form.Item>
  );
};

export default FormDescription;
