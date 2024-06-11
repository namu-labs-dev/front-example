import { ConfigProvider, type ThemeConfig } from "antd";
import { LabeledSelect } from "~/components/Components/LabeledSelect/LabeledSelect";

type Props = {
  labeledSelectProps: React.ComponentProps<typeof LabeledSelect>;
};

const customTheme: ThemeConfig = {
  components: {
    Select: {
      controlHeightLG: 56,
      fontSizeLG: 18,
    },
  },
};

export const BsangsVoteContentSectionModule = (props: Props) => {
  return (
    <div className="h-full px-[20px] py-[27px]">
      <ConfigProvider theme={customTheme}>
        <LabeledSelect {...props.labeledSelectProps} />
      </ConfigProvider>
    </div>
  );
};
