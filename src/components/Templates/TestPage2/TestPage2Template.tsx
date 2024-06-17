import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { TestPage2HeaderModule } from "~/components/Modules/TestPage2Modules/TestPage2HeaderModule";
import { TestPage2ToastModule } from "~/components/Modules/TestPage2Modules/TestPage2ExampleModule";
import { TestPage2FormModule } from "~/components/Modules/TestPage2Modules/TestPage2FormModule";

type Props = {
  TestPage2HeaderModuleProps: React.ComponentProps<
    typeof TestPage2HeaderModule
  >;
  TestPage2ToastModuleProp: React.ComponentProps<typeof TestPage2ToastModule>;
};

export const TestPage2Template = (props: Props) => {
  return (
    <Layout style={{ height: "100%", backgroundColor: "white" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <TestPage2HeaderModule {...props.TestPage2HeaderModuleProps} />
      </Header>

      <Content
        style={{
          overflow: "auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <TestPage2ToastModule {...props.TestPage2ToastModuleProp} />

        <TestPage2FormModule />
      </Content>
    </Layout>
  );
};
