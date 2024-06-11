import { ConfigProvider, type ThemeConfig } from "antd";
import { LabeledInput } from "~/components/Components/LabeledInput/LabeledInput";
import { LabeledSelect } from "~/components/Components/LabeledSelect/LabeledSelect";

type Props = {
  labeledSelectProps: React.ComponentProps<typeof LabeledSelect>;
  labeledInputProps: React.ComponentProps<typeof LabeledInput>;
};

const customTheme: ThemeConfig = {
  components: {
    Select: {
      controlHeightLG: 56,
      fontSizeLG: 18,
    },
    Input: {
      fontSizeLG: 18,
    },
  },
};

export const BsangsVoteContentSectionModule = (props: Props) => {
  return (
    <ConfigProvider theme={customTheme}>
      <div className="flex h-full flex-col gap-[30px] px-[20px] py-[27px]">
        <LabeledSelect {...props.labeledSelectProps} />
        <LabeledInput {...props.labeledInputProps} />
      </div>
    </ConfigProvider>
  );
};
