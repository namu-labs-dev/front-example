import React from "react";
import { Form, type UploadProps, message } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { CameraFilled } from "@ant-design/icons";

type FormImageUploadProps = {
  label: string;
  name: string;
};

const FormImageUpload = ({ label, name }: FormImageUploadProps) => {
  const props: UploadProps = {
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
    <Form.Item label={label} name={name} className="text-base font-bold">
      <Dragger {...props} height={180}>
        <CameraFilled style={{ color: "#00000073", fontSize: "22px" }} />
      </Dragger>
    </Form.Item>
  );
};

export default FormImageUpload;
