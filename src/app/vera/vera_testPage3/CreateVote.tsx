
import React from 'react';
import { Form, Input, Button, Select, Upload, DatePicker, Typography, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const CreateVote: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log('Form Values:', values);
  };

  return (
    <Card style={{ maxWidth: 400, margin: 'auto', marginTop: 20 }}>
      <Title level={4} style={{ textAlign: 'center' }}>Vote</Title>
      <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 20 }}>
        10 FAO will be deducted when voting is generated (Amount: 9 FAO)
      </Text>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: 'Please select a category' }]}
        >
          <Select placeholder="Select a category">
            <Select.Option value="birthday">Birthday AD</Select.Option>
            <Select.Option value="event">Event</Select.Option>
            <Select.Option value="meeting">Meeting</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Vote Title"
          name="title"
          rules={[{ required: true, message: 'Please enter a title' }]}
        >
          <Input placeholder="Title" />
        </Form.Item>

        <Form.Item
          label="Image"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
        >
          <Upload name="image" listType="picture-card">
            <div>
              <UploadOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
        >
          <Input.TextArea placeholder="Please write down a description of the event" rows={4} />
        </Form.Item>

        <Form.Item
          label="Start"
          name="start"
          rules={[{ required: true, message: 'Please select a start date' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Create Vote
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateVote;
