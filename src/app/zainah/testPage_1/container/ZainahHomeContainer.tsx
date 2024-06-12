"use client";

import { Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { useState } from "react";
import { ZainahContentAtom } from "~/components/Atoms/ZainahContentAtom/ZainahContentAtom";
import { ZainahFooterAtom } from "~/components/Atoms/ZainahFooterAtom/ZainahFooterAtom";
import { ZainahHeaderAtom } from "~/components/Atoms/ZainahHeaderAtom/ZainahHeaderAtom";

export const ZainahHomeContainer = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Layout style={{ height: "100%", backgroundColor: "rgba(31, 31, 31, 1)" }}>
      <Header style={{ backgroundColor: "rgba(31, 31, 31, 1)" }}>
        <ZainahHeaderAtom setHeaderClicked={setClicked} />
      </Header>

      <Content>
        <ZainahContentAtom contentClicked={clicked} />
      </Content>

      <Footer style={{ backgroundColor: "rgba(38, 38, 38, 1)" }}>
        <ZainahFooterAtom />
      </Footer>
    </Layout>
  );
};
