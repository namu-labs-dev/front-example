"use client";
import React from "react";
import { Button, DatePicker, Form, Input, notification, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

export default function FormAtom() {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    notification.success(values);
    console.log(values);
  };
  return (
    <div>
      <div className='bg-white '>
        <div>
          <h2 className='py-2 text-center text-lg font-semibold '>Vote</h2>
          <p className='bg-blue-50 px-5 py-2 text-sm'>
            <span className='font-bold text-blue-600'>10 FAO</span> will be
            deducted when voting is generated (Amount : 9 FAO)
          </p>
        </div>
        <div className='mt-5 px-5'>
          <Form
            form={form}
            onFinish={onFinish}
            layout='vertical'
            style={{ maxWidth: 600 }}
          >
            <Form.Item label='Category' name='category'>
              <Input className='py-4' placeholder='Birthday AD' />
            </Form.Item>
            <Form.Item label='Vote Title' name='voteTitle'>
              <Select>
                <Select.Option value='title'>Title</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label='Description' name='textArea'>
              <TextArea
                rows={4}
                placeholder='Please write down the description of the event'
              />
            </Form.Item>

            <Form.Item label='Start' name='datePicker'>
              <DatePicker className='w-full' placeholder='2024-09-06' />
            </Form.Item>

            <div className='flex w-full items-center justify-center'>
              <Button type='primary' htmlType='submit' className='w-full'>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
