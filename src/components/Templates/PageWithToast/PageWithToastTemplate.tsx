import { PageWithToastHeaderModule } from "~/components/Modules/PageWithToast/PageWithToastHeaderModule";
import { PageWithToastDescriptionModule } from "~/components/Modules/PageWithToast/PageWithToastDescriptionModule";
import { PageWithToastExampleModule } from "~/components/Modules/PageWithToast/PageWithToastExampleModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
  pageWithToastHeaderModuleProps: React.ComponentProps<
    typeof PageWithToastHeaderModule
  >;
  pageWithToastExampleModuleProps: React.ComponentProps<
    typeof PageWithToastExampleModule
  >;
};

export const PageWithToastTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <PageWithToastHeaderModule {...props.pageWithToastHeaderModuleProps} />
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
        <PageWithToastDescriptionModule />
        <PageWithToastExampleModule
          {...props.pageWithToastExampleModuleProps}
        />
      </Content>
    </Layout>
  );
};
