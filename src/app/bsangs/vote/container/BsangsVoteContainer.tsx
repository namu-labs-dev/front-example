import { useState } from "react";
import { BsangsVoteTemplate } from "~/components/Templates/BsangsVote/BsangsVoteTemplate";

export default function BsangsVoteContainer() {
  const [selectCategory, setSelectCategory] = useState<string>();

  const voteTemplateProps: React.ComponentProps<typeof BsangsVoteTemplate> = {
    headerModuleProps: {
      title: "Vote",
    },

    infoBannerModuleProps: {
      deductedAmount: 10,
      currentAmount: 10000,
    },

    contentSectionModuleProps: {
      labeledSelectProps: {
        label: "Category",
        options: [
          { value: "candidate1", label: "Candidate 1" },
          { value: "candidate2", label: "Candidate 2" },
          { value: "candidate3", label: "Candidate 3" },
          { value: "candidate4", label: "Candidate 4" },
        ],
        value: selectCategory,
        placeholder: "Birthday AD",
        onChange: (value) => console.log(value),
      },
    },
  };

  return <BsangsVoteTemplate {...voteTemplateProps} />;
}
