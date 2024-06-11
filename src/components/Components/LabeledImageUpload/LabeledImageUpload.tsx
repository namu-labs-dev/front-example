import React, { useState } from "react";
import { Upload, type UploadProps } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import type { RcFile } from "antd/es/upload/interface";
import Image from "next/image";
import styled from "@emotion/styled";

const UploadContainer = styled.div`
  .ant-upload {
    width: 100% !important;
    height: 360px !important;
    border: none !important;
    border-radius: 9px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }
`;

type Props = {
  label: string;
  onChange: (file: RcFile | null) => void;
};

export const LabeledImageUpload = (props: Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "done" && info.file.originFileObj) {
      const file = info.file.originFileObj;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageUrl(reader.result as string);
        props.onChange(file);
      };
    } else if (info.file.status === "removed") {
      setImageUrl(null);
      props.onChange(null);
    }
  };

  const uploadButton = (
    <div className="flex h-[360px] w-full items-center justify-center rounded-[9px] border-[1px] border-[#D9D9D9] bg-gray-100">
      <CameraOutlined style={{ fontSize: "32px", color: "#999" }} />
    </div>
  );

  return (
    <UploadContainer className="flex w-full flex-col gap-[9px]">
      <span className="text-[16px] font-medium leading-[20px]">
        {props.label}
      </span>
      <Upload
        name="image"
        listType="picture-card"
        className="avatar-uploader h-fit w-full"
        showUploadList={false}
        style={{ height: "360px" }}
        onChange={handleChange}
      >
        {imageUrl ? (
          <div className="relative h-[360px] w-full">
            <Image
              src={imageUrl}
              alt="avatar"
              className="rounded-[9px] object-cover"
              objectFit="contain"
              fill
            />
          </div>
        ) : (
          uploadButton
        )}
      </Upload>
    </UploadContainer>
  );
};
