import { PageWithFormHeaderModule } from "~/components/Modules/PageWithForm/PageWithFormHeaderModule";
import { PageWithFormFormModule } from "~/components/Modules/PageWithForm/PageWithFormFormModule";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { TestPage2HeaderModule } from "~/components/Modules/TestPage2/TestPage2HeaderModule";
import { TestPage2FormModule } from "~/components/Modules/TestPage2/TestPage2FormModule";
import { TestPage2Banner } from "~/components/Components/TestPage2Banner/TestPage2Banner";

type Props = {
  testPage2HeaderModuleProps: React.ComponentProps<
    typeof TestPage2HeaderModule
  >;
  testPage2FormModuleProps: React.ComponentProps<
    typeof TestPage2FormModule
  >;
};

export const TestPage2Template = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <TestPage2HeaderModule {...props.testPage2HeaderModuleProps} />
      </Header>
      <Content style={{ overflow: "auto" }}>
        <TestPage2Banner />
        <TestPage2FormModule {...props.testPage2FormModuleProps} />
      </Content>
    </Layout>
  );
};
