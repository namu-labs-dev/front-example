import { Layout } from "antd";

import EkanVoteBannerModule from "~/components/Modules/EkanVote/EkanVoteBannerModule";
import EkanVoteFormContentModule from "~/components/Modules/EkanVote/EkanVoteFormContentModule";
import EkanVoteHeaderModule from "~/components/Modules/EkanVote/EkanVoteHeaderModule";

type Props = {
  headerModuleProps: React.ComponentProps<typeof EkanVoteHeaderModule>;
  voteBannerProps: React.ComponentProps<typeof EkanVoteBannerModule>;
  formContentModuleProps: React.ComponentProps<
    typeof EkanVoteFormContentModule
  >;
};

export const EkanVoteTemplate = ({
  headerModuleProps,
  voteBannerProps,
  formContentModuleProps,
}: Props) => {
  return (
    <Layout
      style={{
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <EkanVoteHeaderModule {...headerModuleProps} />
      <EkanVoteBannerModule {...voteBannerProps} />
      <EkanVoteFormContentModule {...formContentModuleProps} />
    </Layout>
  );
};
