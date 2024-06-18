import { EkanVoteTemplate } from "~/components/Templates/EkanVote/EkanVoteTemplate";

export const EkanVoteContainer = () => {
  const homeTemplateProps: React.ComponentProps<typeof EkanVoteTemplate> = {
    headerModuleProps: {
      title: "Vote",
    },
    voteBannerProps: {
      deductionAmount: 9,
      votingAmount: 10,
    },
    formContentModuleProps: {
      formCategory: {
        label: "Category",
        placeholder: "Birthday AD",
        name: "category",
      },
      formTitle: {
        label: "Vote Title",
        name: "title",
        placeholder: "Title",
      },
      formImageUpload: {
        label: "Image",
        name: "image",
      },
      formDescription: {
        label: "Description",
        name: "description",
        placeholder: "Please write down a description of the event",
      },
      formDate: {
        label: "Start",
        name: "date",
      },
      formSubmit: {
        label: "Create Vote",
      },
    },
  };

  return <EkanVoteTemplate {...homeTemplateProps} />;
};
