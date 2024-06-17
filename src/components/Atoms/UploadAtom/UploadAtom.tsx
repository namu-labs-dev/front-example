import React from "react";
import { InboxOutlined, UploadOutlined, CameraOutlined } from "@ant-design/icons";
import {
  Form,


  Upload,
} from "antd";


const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};


const UploadAtom: React.FC = () => (

      <Form.Item
        name="dragger"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        noStyle
      >
        <Upload.Dragger name="files" action="/upload.do">
          <div className="p-[70px]">
                <CameraOutlined  color="black" />
          </div>

        </Upload.Dragger>
      </Form.Item>

);

export default UploadAtom;
