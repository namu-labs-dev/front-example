import { Button, DatePicker, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import UpladAtom from "~/components/Atoms/UploadAtom/UploadAtom";

const options = ["Birthday AD", "Other AD", "last AD"];
export const TestPage2FormModule = () => {
  const [form] = Form.useForm();

  return (
    <div className=" flex flex-col gap-5 pt-[70px]">
      <Form
        layout="vertical"
        form={form}
        initialValues={{ layout: "vertical" }}
        style={{ maxWidth: 600 }}
        size="large"
      >
        <Form.Item label="Field A">
          <Select>
            {options.map((item, index) => (
              <Select.Option key={index} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Vote Title">
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item label="Image">
          <UpladAtom />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea
            placeholder="Please write dwon the description of the event"
            style={{ height: "195.78px" }}
          />
        </Form.Item>
        <Form.Item label="Start">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="mt-5" block>
            Create Vote
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
