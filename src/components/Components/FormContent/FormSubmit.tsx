import React from "react";
import { Button, Form } from "antd";

type FormSubmitProps = {
  label: string;
};

const FormSubmit = ({ label }: FormSubmitProps) => {
  return (
    <Form.Item style={{ paddingBottom: "2rem" }}>
      <Button
        type="primary"
        className="h-full w-full text-3xl capitalize"
        htmlType="submit"
        style={{ height: 53.37, backgroundColor: "#2F54EB" }}
      >
        {label}
      </Button>
    </Form.Item>
  );
};

export default FormSubmit;
