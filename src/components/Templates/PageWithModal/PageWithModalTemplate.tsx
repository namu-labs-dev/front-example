import { PageWithModalHeaderModule } from "~/components/Modules/PageWithModal/PageWithModalHeaderModule";
import { PageWithModalContentModule } from "~/components/Modules/PageWithModal/PageWithModalContentModule";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";

type Props = {
  pageWithModalHeaderModuleProps: React.ComponentProps<
    typeof PageWithModalHeaderModule
  >;
  pageWithModalContentModuleProps: React.ComponentProps<
    typeof PageWithModalContentModule
  >;
};

export const PageWithModalTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <PageWithModalHeaderModule {...props.pageWithModalHeaderModuleProps} />
      </Header>

      <Content style={{ overflow: "auto" }}>
        <PageWithModalContentModule
          {...props.pageWithModalContentModuleProps}
        />
      </Content>
    </Layout>
  );
};
