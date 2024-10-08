import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";
import EmptyHeaderModule from "../Module/EmptyHeaderModule";
import EmptyFooterModule from "../Module/EmptyFooterModule";
import EmptyContentModule from "../Module/EmptyContentModule";

export default function EmptyTemplate() {
  return (
    <Layout className='h-screen'>
      <Header
        style={{
          backgroundColor: "black",
          padding: "16px 10px",
        }}
      >
        <EmptyHeaderModule />
      </Header>

      <Content>
        <EmptyContentModule />
      </Content>

      <Footer style={{ backgroundColor: "black", padding: "10px 28px" }}>
        <EmptyFooterModule />
      </Footer>
    </Layout>
  );
}
