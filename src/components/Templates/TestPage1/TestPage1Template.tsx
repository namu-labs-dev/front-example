import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeaderModule";
import { HomeContentModule } from "~/components/Modules/Home/HomeContentModule";
import { HomeFooterModule } from "~/components/Modules/Home/HomeFooterModule";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { HomeDescriptionModule } from "~/components/Modules/HomeDescription/HomeDescriptionModule";
import { TestPage1HeaderModule } from "~/components/Modules/TestPage1/TestPage1HeaderModule";
import TestPage1FooterModule from "~/components/Modules/TestPage1/TestPage1FooterModule";
import { TestPage1ContentModule } from "~/components/Modules/TestPage1/TestPage1ContentModule";

type Props = {
  testPage1HeaderModuleProps: React.ComponentProps<
    typeof TestPage1HeaderModule
  >;
  testPage1ContentModuleProps: React.ComponentProps<
    typeof TestPage1ContentModule
  >;
  testPage1FooterModuleProps: React.ComponentProps<
    typeof TestPage1FooterModule
  >;
};

export const TestPage1Template = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <TestPage1HeaderModule {...props.testPage1HeaderModuleProps} />
      </Header>

      <Content
        style={{ overflow: "auto", padding: "16px 20px" }}
        className='bg-black'
      >
        <TestPage1ContentModule {...props.testPage1ContentModuleProps} />
        {/* <HomeDescriptionModule /> */}
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}>
        <TestPage1FooterModule {...props.testPage1FooterModuleProps} />
      </Footer>
    </Layout>
  );
};
