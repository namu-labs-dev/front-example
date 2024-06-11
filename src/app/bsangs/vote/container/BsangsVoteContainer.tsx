import { useEffect, useState } from "react";
import { BsangsVoteTemplate } from "~/components/Templates/BsangsVote/BsangsVoteTemplate";

export default function BsangsVoteContainer() {
  const [selectCategory, setSelectCategory] = useState<string>();
  const [inputTitle, setInputTitle] = useState<string>();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [inputDescription, setInputDescription] = useState<string>();
  const [inputStartDate, setInputStartDate] = useState<any>();
  const [inputDateString, setInputDateString] = useState<string>();

  const onChangeDate = (date: any, dateString: string | string[]) => {
    setInputStartDate(date);
    setInputDateString(dateString as string);
  };

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
        onChange: (value) => setSelectCategory(value),
      },

      labeledInputProps: {
        label: "Vote Title",
        placeholder: "Title",
        value: inputTitle,
        onChange: (value) => setInputTitle(value),
      },

      labeledImageUploadProps: {
        label: "Vote Image",
        onChange: (file) => setImageFile(file),
      },

      labeledTextAreaProps: {
        label: "Description",
        placeholder: "Please write down a description of the event",
        value: inputDescription,
        onChange: (value) => setInputDescription(value),
      },

      labeledDatePickerProps: {
        label: "Start",
        placeholder: "Start Date",
        onChange: onChangeDate,
        value: inputStartDate,
      },
    },
  };

  return <BsangsVoteTemplate {...voteTemplateProps} />;
}
