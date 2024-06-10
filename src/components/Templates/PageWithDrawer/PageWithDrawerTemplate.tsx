import { PageWithDrawerHeaderModule } from "~/components/Modules/PageWithDrawer/PageWithDrawerHeaderModule";
import { PageWithDrawerDescriptionModule } from "~/components/Modules/PageWithDrawer/PageWithDrawerDescriptionModule";
import { PageWithDrawerExamplesModule } from "~/components/Modules/PageWithDrawer/PageWithDrawerExamplesModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
  pageWithDrawerHeaderModuleProps: React.ComponentProps<
    typeof PageWithDrawerHeaderModule
  >;
  pageWithDrawerExamplesModuleProps: React.ComponentProps<
    typeof PageWithDrawerExamplesModule
  >;
};

export const PageWithDrawerTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <PageWithDrawerHeaderModule
          {...props.pageWithDrawerHeaderModuleProps}
        />
      </Header>

      <Content
        style={{
          overflow: "auto",
          padding: "20px",
          gap: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <PageWithDrawerDescriptionModule />
        <PageWithDrawerExamplesModule
          {...props.pageWithDrawerExamplesModuleProps}
        />
      </Content>
    </Layout>
  );
};
