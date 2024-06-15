import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
  title?: string[];
};

export const JehoVoteTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", backgroundColor: "white" }}>
      <Header style={{ padding: 0, height: 50 }}>
        <JehoVoteTemplate />
      </Header>

      <Content
        style={{
          overflow: "hidden",
          color: "white",
          height: "100%",
        }}
      ></Content>

      <Footer style={{ padding: 0, minHeight: 50 }}></Footer>
    </Layout>
  );
};
