import { Layout } from "antd";
import { BsangsVoteContentSectionModule } from "~/components/Modules/BsangsVote/BsangsVoteContentSectionModule";
import { BsangsVoteFooterModule } from "~/components/Modules/BsangsVote/BsangsVoteFooterModule";
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

  footerModuleProps: React.ComponentProps<typeof BsangsVoteFooterModule>;
};

export const BsangsVoteTemplate = (props: Props) => {
  return (
    <Layout style={{ height: "100%", backgroundColor: "white" }}>
      <BsangsVoteHeaderModule {...props.headerModuleProps} />
      <BsangsVoteInfoBannerModule {...props.infoBannerModuleProps} />
      <BsangsVoteContentSectionModule {...props.contentSectionModuleProps} />
      <BsangsVoteFooterModule {...props.footerModuleProps} />
    </Layout>
  );
};
