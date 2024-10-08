import { Layout, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React from "react";
import HomeHeaderModule from "../../Modules/Home/HomeHeaderModule";
import HomeContentModule from "../../Modules/Home/HomeContentModule";
import HomeFooterModule from "../../Modules/Home/HomeFooterModule";

export default function HomeTemplate() {
  return (
    <div>
      <Layout className='h-screen'>
        <Header
          style={{
            backgroundColor: "black",
            padding: "16px 10px",
          }}
        >
          <HomeHeaderModule />
        </Header>

        <Content>
          <HomeContentModule />
        </Content>

        <Footer style={{ backgroundColor: "black", padding: "10px 28px" }}>
          <HomeFooterModule />{" "}
        </Footer>
      </Layout>
    </div>
  );
}
