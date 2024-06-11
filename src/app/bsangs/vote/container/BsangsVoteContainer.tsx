import { BsangsVoteTemplate } from "~/components/Templates/BsangsVote/BsangsVoteTemplate";

export default function BsangsVoteContainer() {
  const voteTemplateProps: React.ComponentProps<typeof BsangsVoteTemplate> = {};

  return <BsangsVoteTemplate {...voteTemplateProps} />;
}
