import { PageWithFormHeaderModule } from "~/components/Modules/PageWithForm/PageWithFormHeaderModule";
import { PageWithFormFormModule } from "~/components/Modules/PageWithForm/PageWithFormFormModule";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

type Props = {
  pageWithFormHeaderModuleProps: React.ComponentProps<
    typeof PageWithFormHeaderModule
  >;
  pageWithFormFormModuleProps: React.ComponentProps<
    typeof PageWithFormFormModule
  >;
};

export const PageWithFormTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <PageWithFormHeaderModule {...props.pageWithFormHeaderModuleProps} />
      </Header>
      <Content style={{ overflow: "auto" }}>
        <PageWithFormFormModule {...props.pageWithFormFormModuleProps} />
      </Content>
    </Layout>
  );
};
