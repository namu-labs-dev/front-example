import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import TransactionModal from "~/components/Components/TransactionModal/TransactionModal";
import { JehoHomeContentModule } from "~/components/Modules/JehoHome/JehoHomeContentModule";
import { JehoHomeFooterModule } from "~/components/Modules/JehoHome/JehoHomeFooterModule";
import { JehoHomeHeaderModule } from "~/components/Modules/JehoHome/JehoHomeHeaderModule";

type Props = {
  homeHeaderModuleProps: React.ComponentProps<typeof JehoHomeHeaderModule>;
  homeContentModuleProps: React.ComponentProps<typeof JehoHomeContentModule>;
  homeFooterModuleProps: React.ComponentProps<typeof JehoHomeFooterModule>;
  transactionModalProps: React.ComponentProps<typeof TransactionModal>;
};

export const JehoHomeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <JehoHomeHeaderModule {...props.homeHeaderModuleProps} />
      </Header>

      <Content
        style={{
          overflow: "hidden",
          backgroundColor: "#1F1F1F",
          color: "white",
          height: "100%",
        }}
      >
        <JehoHomeContentModule {...props.homeContentModuleProps} />
        <TransactionModal {...props.transactionModalProps} />
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}>
        <JehoHomeFooterModule {...props.homeFooterModuleProps} />
      </Footer>
    </Layout>
  );
};
