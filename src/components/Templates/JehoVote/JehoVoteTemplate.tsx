import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import JehoVoteBannerModule from "~/components/Modules/JehoVote/JehoVoteBannerModule";
import JehoVoteFooterModule from "~/components/Modules/JehoVote/JehoVoteFooterModule";
import JehoVoteFormContentModule from "~/components/Modules/JehoVote/JehoVoteFormContentModule";
import JehoVoteHeaderModule from "~/components/Modules/JehoVote/JehoVoteHeaderModule";

type Props = {
  headerModuleProps: React.ComponentProps<typeof JehoVoteHeaderModule>;
  formContentModuleProps: React.ComponentProps<
    typeof JehoVoteFormContentModule
  >;
};

export const JehoVoteTemplate = (props: Props) => {
  return (
    <Layout
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <JehoVoteHeaderModule {...props.headerModuleProps} />
      <JehoVoteBannerModule />
      <JehoVoteFormContentModule {...props.formContentModuleProps} />
    </Layout>
  );
};
