import { Layout } from "antd";

import { Content, Footer, Header } from "antd/es/layout/layout";

import TransactionModal from "~/components/Components/TransactionModal/TransactionModal";
import { EkanHomeContentModule } from "~/components/Modules/EkanHome/EkanHomeContentModule";
import { EkanHomeFooterModule } from "~/components/Modules/EkanHome/EkanHomeFooterModule";
import { EkanHomeHeaderModule } from "~/components/Modules/EkanHome/EkanHomeHeaderModule";

type EkanHomeTemplateProps = {
  homeHeaderModuleProps: React.ComponentProps<typeof EkanHomeHeaderModule>;
  transactionModalProps: React.ComponentProps<typeof TransactionModal>;
};

export const EkanHomeTemplate = ({
  homeHeaderModuleProps,
  transactionModalProps,
}: EkanHomeTemplateProps) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <EkanHomeHeaderModule {...homeHeaderModuleProps} />
      </Header>

      <Content
        style={{
          overflow: "hidden",
          backgroundColor: "#1F1F1F",
          color: "white",
          height: "100%",
        }}
      >
        <EkanHomeContentModule />
        <TransactionModal {...transactionModalProps} />
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}>
        <EkanHomeFooterModule />
      </Footer>
    </Layout>
  );
};
