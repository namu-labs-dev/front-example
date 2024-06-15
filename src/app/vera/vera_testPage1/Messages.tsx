
import React from 'react';
import { List, Avatar, Layout } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const messages = [
  {
    id: '1',
    title: 'ETH',
    description: 'User: namulabs is fantastic company...',
    time: '08:43 PM',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
  },
  {
    id: '2',
    title: 'Nvir.',
    description: 'User: namulabs is fantastic company...',
    time: '08:42 AM',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png',
  },
];

const Messages: React.FC = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ background: '#000', padding: 0, textAlign: 'center', color: '#fff' }}>
        <h1>Proxima OS</h1>
      </Header>
      <Content style={{ padding: '16px', background: '#333' }}>
        <List
          itemLayout="horizontal"
          dataSource={messages}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.icon} />}
                title={<a style={{ color: '#fff' }}>{item.title}</a>}
                description={<span style={{ color: '#ccc' }}>{item.description}</span>}
              />
              <div style={{ color: '#ccc' }}>{item.time}</div>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default Messages;
