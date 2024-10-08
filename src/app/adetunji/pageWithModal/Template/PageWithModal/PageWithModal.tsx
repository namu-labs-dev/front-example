import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";
import HomeHeaderModule from "~/app/adetunji/home/Modules/Home/HomeHeaderModule";
import PageWithModalModule from "../../Module/PageWithModal/PageWithModalModule";
import HomeFooterModule from "~/app/adetunji/home/Modules/Home/HomeFooterModule";
export default function PageWithModal() {
  return (
    <Layout className='h-screen'>
      <Header
        style={{
          backgroundColor: "black",

          padding: "16px  10px",
        }}
      >
        <HomeHeaderModule />
      </Header>

      <Content>
        <PageWithModalModule />{" "}
      </Content>

      <Footer style={{ backgroundColor: "black", padding: "10px 28px" }}>
        <HomeFooterModule />{" "}
      </Footer>
    </Layout>
  );
}
