import React from "react";
import { Form, message, type FormProps } from "antd";
import { useForm } from "antd/es/form/Form";

import FormCategory from "~/components/Components/FormContent/FormCategory";
import FormTitle from "~/components/Components/FormContent/FormTitle";
import FormImageUpload from "~/components/Components/FormContent/FormImageUpload";
import FormDescription from "~/components/Components/FormContent/FormDescription";
import FormDate from "~/components/Components/FormContent/FormDate";
import FormSubmit from "~/components/Components/FormContent/FormSubmit";

type EkanVoteFormContentModuleProps = {
  formCategory: React.ComponentProps<typeof FormCategory>;
  formTitle: React.ComponentProps<typeof FormTitle>;
  formDate: React.ComponentProps<typeof FormDate>;
  formDescription: React.ComponentProps<typeof FormDescription>;
  formImageUpload: React.ComponentProps<typeof FormImageUpload>;
  formSubmit: React.ComponentProps<typeof FormSubmit>;
};

type FieldType = {
  category?: string;
  title?: string;
  image?: string;
  description?: string;
  date?: string;
};

const EkanVoteFormContentModule = ({
  formCategory,
  formDate,
  formDescription,
  formImageUpload,
  formTitle,
  formSubmit,
}: EkanVoteFormContentModuleProps) => {
  const [form] = useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const hasUndefinedValues = Object.values(values).some(
      (value) => value === undefined,
    );

    if (hasUndefinedValues) {
      void message.error("Please complete all fields before submitting");
      return;
    }

    console.log("Success:", values);
    void message.success("Your vote was created successfully");
    form.resetFields();
  };

  return (
    <div className="mt-[1.5rem] h-full w-full px-[1.25rem]">
      <Form form={form} onFinish={onFinish} layout="vertical">
        <FormCategory {...formCategory} />
        <FormTitle {...formTitle} />
        <FormImageUpload {...formImageUpload} />
        <FormDescription {...formDescription} />
        <FormDate {...formDate} />
        <FormSubmit {...formSubmit} />
      </Form>
    </div>
  );
};

export default EkanVoteFormContentModule;
