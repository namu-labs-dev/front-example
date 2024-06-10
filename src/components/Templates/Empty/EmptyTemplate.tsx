import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { EmptyContentModule } from "~/components/Modules/Empty/EmptyContentModule";
import { EmptyFooterModule } from "~/components/Modules/Empty/EmptyFooterModule";
import { EmptyHeaderModule } from "~/components/Modules/Empty/EmptyHeaderModule";

type Props = {
  emptyHeaderModuleProps: React.ComponentProps<typeof EmptyHeaderModule>;
  emptyContentModuleProps: React.ComponentProps<typeof EmptyContentModule>;
  emptyFooterModuleProps: React.ComponentProps<typeof EmptyFooterModule>;
};

export const EmptyTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <EmptyHeaderModule {...props.emptyHeaderModuleProps} />
      </Header>
      <Content style={{ overflow: "auto" }}>
        <EmptyContentModule {...props.emptyContentModuleProps} />
      </Content>
      <Footer style={{ padding: 0, minHeight: 50 }}>
        <EmptyFooterModule {...props.emptyFooterModuleProps} />
      </Footer>
    </Layout>
  );
};
