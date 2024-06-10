import { PageWithToastHeaderModule } from "~/components/Modules/PageWithToast/PageWithToastHeaderModule";
import { PageWithToastDescriptionModule } from "~/components/Modules/PageWithToast/PageWithToastDescriptionModule";
import { PageWithToastExampleModule } from "~/components/Modules/PageWithToast/PageWithToastExampleModule";
  import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
  pageWithToastHeaderModuleProps: React.ComponentProps<typeof PageWithToastHeaderModule>;
  pageWithToastDescriptionModuleProps: React.ComponentProps<typeof PageWithToastDescriptionModule>;
  pageWithToastExampleModuleProps: React.ComponentProps<typeof PageWithToastExampleModule>;
};

export const PageWithToastTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
    {/*
    <Header style={{ padding: 0, height: 50 }}>
    place for header module
    </Header>
    */}

    <Content style={{ overflow: "auto" }}>
           <PageWithToastHeaderModule {...props.pageWithToastHeaderModuleProps}  />
     <PageWithToastDescriptionModule {...props.pageWithToastDescriptionModuleProps}  />
     <PageWithToastExampleModule {...props.pageWithToastExampleModuleProps}  />
    </Content>

    {/*
    <Footer style={{ padding: 0, minHeight: 50 }}>
    place for footer module
    </Footer>
    */}
  </Layout>
  );
};
  