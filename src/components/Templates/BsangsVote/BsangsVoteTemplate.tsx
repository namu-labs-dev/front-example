import { Layout } from "antd";
import { BsangsVoteContentSectionModule } from "~/components/Modules/BsangsVote/BsangsVoteContentSectionModule";
import { BsangsVoteHeaderModule } from "~/components/Modules/BsangsVote/BsangsVoteHeaderModule";
import { BsangsVoteInfoBannerModule } from "~/components/Modules/BsangsVote/BsangsVoteInfoBannerModule";

type Props = {
  headerModuleProps: React.ComponentProps<typeof BsangsVoteHeaderModule>;
  infoBannerModuleProps: React.ComponentProps<
    typeof BsangsVoteInfoBannerModule
  >;
  contentSectionModuleProps: React.ComponentProps<
    typeof BsangsVoteContentSectionModule
  >;
};

export const BsangsVoteTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", backgroundColor: "white" }}>
      <BsangsVoteHeaderModule {...props.headerModuleProps} />
      <BsangsVoteInfoBannerModule {...props.infoBannerModuleProps} />
      <BsangsVoteContentSectionModule {...props.contentSectionModuleProps} />
    </Layout>
  );
};
