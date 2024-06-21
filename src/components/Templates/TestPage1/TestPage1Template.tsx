import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeaderModule";
import { HomeContentModule } from "~/components/Modules/Home/HomeContentModule";
import { HomeFooterModule } from "~/components/Modules/Home/HomeFooterModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeDescriptionModule } from "~/components/Modules/HomeDescription/HomeDescriptionModule";
import { TestPage1HeaderModule } from "~/components/Modules/TestPage1/TestPage1HeaderModule";

type Props = {
  testPage1HeaderModuleProps: React.ComponentProps<typeof TestPage1HeaderModule>;
  homeContentModuleProps: React.ComponentProps<typeof HomeContentModule>;
  homeFooterModuleProps: React.ComponentProps<typeof HomeFooterModule>;
};

export const TestPage1Template = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <TestPage1HeaderModule {...props.testPage1HeaderModuleProps} />
      </Header>

      <Content style={{ overflow: "auto", padding: "20px" }}>
        <HomeContentModule {...props.homeContentModuleProps} />
        <HomeDescriptionModule />
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}>
        <HomeFooterModule {...props.homeFooterModuleProps} />
      </Footer>
    </Layout>
  );
};
