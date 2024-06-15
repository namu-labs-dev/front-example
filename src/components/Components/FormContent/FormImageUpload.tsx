import { CameraFilled, CameraOutlined } from "@ant-design/icons";
import { Form, type UploadProps, message } from "antd";
import Dragger from "antd/es/upload/Dragger";
import React from "react";
type Props = {
  label: string;
  name: string;
  image?: string;
};
const FormImageUpload = (props: Props) => {
  const { label, name } = props;
  const propsUpload: UploadProps = {
    name: "file",
    multiple: true,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        void message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        void message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <Form.Item<Props>
      label={label}
      name={"image"}
      rules={[{ required: true, message: "Please upload an image!" }]}
    >
      <Dragger {...propsUpload} height={180}>
        <CameraFilled style={{ color: "#00000073", width: 18, height: 16 }} />
      </Dragger>
    </Form.Item>
  );
};

export default FormImageUpload;
