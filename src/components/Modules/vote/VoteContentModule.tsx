import {
  Select,
  Upload,
  DatePicker,
  Button,
  Input,
  GetProp,
  UploadProps,
} from "antd";
import React from "react";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

interface Props {
  beforeUpload: (file: FileType) => void;
  handleChange: (info: any) => void;
  uploadButton: React.ReactNode;
  imageUrl?: string;
}

export const VoteContentModule: React.FC<Props> = ({
  beforeUpload,
  handleChange,
  uploadButton,
  imageUrl,
}) => {
  return (
    <div className="pb-10">
      <div className="p-4 text-center text-xl font-bold">Vote</div>

      <div
        className="p-6"
        style={{ backgroundColor: "rgba(240, 245, 255, 1)" }}
      >
        <span className="font-bold" style={{ color: "rgba(47, 84, 235, 1)" }}>
          10 FAO
        </span>{" "}
        will be deducted when voting is generated (Amount : 9 FAO)
      </div>

      <form className="flex w-full flex-col gap-5 p-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="">Category</label>
          <Select
            options={[
              { value: "Birthday AD", label: <span>Birthday AD</span> },
            ]}
            placeholder="Birthday AD"
            className="custom-select w-full focus:border-transparent focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="">Vote Title</label>
          <Input
            placeholder="Title"
            className="custom-select w-full focus:border-transparent focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="">Image</label>
          <Upload
            name="avatar"
            //   listType="picture-card"
            className="flex h-44 w-full items-center justify-center bg-gray-50"
            showUploadList={false}
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="">Description</label>
          <Input.TextArea
            rows={5}
            placeholder="Please write down a description of the event"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="">Start</label>
          <DatePicker />
        </div>

        <Button
          style={{
            backgroundColor: "rgba(47, 84, 235, 1)",
            color: "white",
            fontSize: "16px",
            height: "40px",
          }}
        >
          Create Vote
        </Button>
      </form>
    </div>
  );
};
