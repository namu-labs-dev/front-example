import React from "react";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";

type FormDescriptionProps = {
  label: string;
  name: string;
  placeholder: string;
};

const FormDescription = ({
  label,
  name,
  placeholder,
}: FormDescriptionProps) => {
  return (
    <Form.Item
      label={label}
      name={name}
      className="text-base font-bold"
    >
      <TextArea
        style={{ height: 195, color: "#00000040" }}
        className="font-normal"
        placeholder={placeholder}
      />
    </Form.Item>
  );
};

export default FormDescription;
