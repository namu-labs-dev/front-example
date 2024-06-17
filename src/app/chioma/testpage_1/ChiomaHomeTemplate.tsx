import { Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React from 'react'
import ChiomaHomeContent from './ChiomaHomeContent'
import { HomeFooterModule } from '~/components/Modules/Home/HomeFooterModule'
import { HomeHeaderModule } from '~/components/Modules/Home/HomeHeaderModule'

type Props = {
  homeHeaderModuleProps: React.ComponentProps<typeof HomeHeaderModule>;
  homeFooterModuleProps: React.ComponentProps<typeof HomeFooterModule>;
};

const ChiomaHomeTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", position: "relative" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <HomeHeaderModule {...props.homeHeaderModuleProps} />
      </Header>

      <Content style={{ overflow: "auto" }}>
        <ChiomaHomeContent />
      </Content>

      <Footer style={{ padding: 0, minHeight: 50 }}>
        <HomeFooterModule {...props.homeFooterModuleProps} />
      </Footer>
    </Layout>
  )
}

export default ChiomaHomeTemplate
