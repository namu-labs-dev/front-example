import {
  Form,
  Radio,
  Select,
  TreeSelect,
  Cascader,
  DatePicker,
  InputNumber,
  Switch,
  Button,
  Slider,
  ColorPicker,
  Input,
  Modal,
} from "antd";
import { useState } from "react";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

type Props = {
  setFormData: (data: any) => void;
};

export const PageWithFormFormModule = (props: Props) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        onFieldsChange={(changedFields) => {
          props.setFormData((prevData: any) =>
            changedFields.reduce(
              (acc, { name, value }) => ({ ...acc, [name[0]]: value }),
              prevData,
            ),
          );
        }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
      >
        <Form.Item label="Radio" name="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input" name="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select" name="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect" name="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",
                children: [{ title: "Bamboo", value: "bamboo" }],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader" name="Cascader">
          <Cascader
            options={[
              {
                value: "zhejiang",
                label: "Zhejiang",
                children: [
                  {
                    value: "hangzhou",
                    label: "Hangzhou",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker" name="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker" name="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber" name="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea" name="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" name="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Button" name="Button">
          <Button>Button</Button>
        </Form.Item>
        <Form.Item label="Slider" name="Slider">
          <Slider />
        </Form.Item>
        <Form.Item label="ColorPicker" name="ColorPicker">
          <ColorPicker />
        </Form.Item>
        <div className="flex w-full items-center justify-center">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
};
