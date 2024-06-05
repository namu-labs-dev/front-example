import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { EmptyFirstModule } from "~/components/Modules/Empty/EmptyFirstModule";
import { EmptySecontModule } from "~/components/Modules/Empty/EmptySecontModule";
import { EmptyThirdModule } from "~/components/Modules/Empty/EmptyThirdModule";

type Props = {
  emptyFirstModuleProps: React.ComponentProps<typeof EmptyFirstModule>;
  emptySecontModuleProps: React.ComponentProps<typeof EmptySecontModule>;
  emptyThirdModuleProps: React.ComponentProps<typeof EmptyThirdModule>;
};

export const EmptyTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%" }}>
      <Content style={{ overflow: "auto" }}>
        <EmptyFirstModule {...props.emptyFirstModuleProps} />
        <EmptySecontModule {...props.emptySecontModuleProps} />
        <EmptyThirdModule {...props.emptyThirdModuleProps} />
      </Content>
    </Layout>
  );
};
