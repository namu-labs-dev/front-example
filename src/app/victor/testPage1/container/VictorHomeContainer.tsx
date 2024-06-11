"use client";

import { Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { useState } from "react";
import { VictorContentAtom } from "~/components/Atoms/VictorContentAtom/VictorContentAtom";
import { VictorFooterAtom } from "~/components/Atoms/VictorFooterAtom/VictorFooterAtom";
import { VictorHeaderAtom } from "~/components/Atoms/VictorHeaderAtom/VictorHeaderAtom";

export const VictorHomeContainer = () => {
  const [settingClicked, setSettingClicked] = useState(false);

  return (
    <Layout style={{ height: "100%", backgroundColor: "rgba(31, 31, 31, 1)" }}>
      <Header style={{ backgroundColor: "rgba(31, 31, 31, 1)" }}>
        <VictorHeaderAtom setSettingClicked={setSettingClicked} />
      </Header>

      <Content>
        <VictorContentAtom settingClicked={settingClicked} />
      </Content>

      <Footer style={{ backgroundColor: "rgba(38, 38, 38, 1)" }}>
        <VictorFooterAtom />
      </Footer>
    </Layout>
  );
};
