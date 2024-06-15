import { TestPage1HeaderModule } from "~/components/Modules/TestPage1/TestPage1HeaderModule";
import { HomeContentModule } from "~/components/Modules/Home/HomeContentModule";
import { HomeFooterModule } from "~/components/Modules/Home/HomeFooterModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeDescriptionModule } from "~/components/Modules/HomeDescription/HomeDescriptionModule";
// import type { TestPage1ContentCustomModal } from "~/components/Components/TestPage1ContentCustomModal/TestPage1ContentCustomModal";
import { TestPage1ContentModule } from "~/components/Modules/TestPage1/TestPage1ContentModule";

type Props = {
  testPage1HeaderModuleProps: React.ComponentProps<typeof TestPage1HeaderModule>;
  testPage1ContentModuleProps: React.ComponentProps<typeof TestPage1ContentModule>;
  // testpage1DrawerModuleProps: 
  homeFooterModuleProps: React.ComponentProps<typeof HomeFooterModule>;
};

export const Testpage1Template = (props: Props) => {
  return (
    <Layout style={{ height: "100%", backgroundColor: "#1F1F1F" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <TestPage1HeaderModule {...props.testPage1HeaderModuleProps} />
      </Header>

      <Content style={{ overflow: "auto", padding: "20px" }}>
        <TestPage1ContentModule {...props.testPage1ContentModuleProps} />
        {/* <HomeDescriptionModule /> */}
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}>
        <HomeFooterModule {...props.homeFooterModuleProps} />
      </Footer>
    </Layout>
  );
};
