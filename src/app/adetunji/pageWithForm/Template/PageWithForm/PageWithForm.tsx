import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import PageWithFormModule from "../../Modules/PageWithForm/PageWithFormModule";

export default function PageWithForm() {
  return (
    <div>
      <Layout className='h-screen'>
        <Content>
          <PageWithFormModule />
        </Content>
      </Layout>
    </div>
  );
}
