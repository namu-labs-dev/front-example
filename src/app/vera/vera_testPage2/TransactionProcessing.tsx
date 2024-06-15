
import React from 'react';
import { Layout, Card } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const TransactionProcessing: React.FC = () => {
  return (
    <Layout style={{ height: '100vh', backgroundColor: '#000' }}>
      <Header style={{ background: '#000', padding: 0, textAlign: 'center', color: '#fff' }}>
        <h1>Proxima OS</h1>
      </Header>
      <Content style={{ padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card style={{ width: 300, textAlign: 'center', backgroundColor: '#333', borderRadius: 10 }}>
          <LoadingOutlined style={{ fontSize: 48, color: '#00FF00' }} />
          <div style={{ marginTop: 16, color: '#fff', fontSize: 18 }}>
            Transaction processing
          </div>
          <div style={{ marginTop: 8, color: '#ccc' }}>
            Uploading your transaction to the node, please wait for a moment...
            <br />
            This may take up to 2 minutes.
          </div>
        </Card>
      </Content>
    </Layout>
  );
};

export default TransactionProcessing;
