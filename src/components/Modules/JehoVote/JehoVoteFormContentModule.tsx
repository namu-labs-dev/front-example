import { Form, message, type FormProps } from "antd";
import React from "react";
import FormCategory from "~/components/Components/FormContent/FormCategory";
import FormDate from "~/components/Components/FormContent/FormDate";
import FormDescription from "~/components/Components/FormContent/FormDescription";
import FormImageUpload from "~/components/Components/FormContent/FormImageUpload";
import FormTitle from "~/components/Components/FormContent/FormTitle";
import JehoVoteFooterModule from "./JehoVoteFooterModule";
import { useForm } from "antd/es/form/Form";

type Props = {
  formCategory: React.ComponentProps<typeof FormCategory>;
  formTitle: React.ComponentProps<typeof FormTitle>;
  formDate: React.ComponentProps<typeof FormDate>;
  formDescription: React.ComponentProps<typeof FormDescription>;
  formImageUpload: React.ComponentProps<typeof FormImageUpload>;
};
type FieldType = {
  category?: string;
  title?: string;
  image?: string;
  description?: string;
  date?: string;
};

const JehoVoteFormContentModule = (props: Props) => {
  const [form] = useForm();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    void message.success("Vote create successfully");
    form.resetFields();
  };
  return (
    <div className="mt-[25px] h-full w-full px-[20px]">
      <Form form={form} onFinish={onFinish} layout="vertical">
        <FormCategory {...props.formCategory} />
        <FormTitle {...props.formTitle} />
        <FormImageUpload {...props.formImageUpload} />
        <FormDescription {...props.formDescription} />
        <FormDate {...props.formDate} />
        <JehoVoteFooterModule />
      </Form>
    </div>
  );
};

export default JehoVoteFormContentModule;
