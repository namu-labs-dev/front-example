import { Layout } from "antd";
import { BsangsHomeFooterModule } from "~/components/Modules/BsangsHome/BsangsHomeFooterModule";
import { BsangsHomeHeaderModule } from "~/components/Modules/BsangsHome/BsangsHomeHeaderModule";
import { BsangsHomeMessageListModule } from "~/components/Modules/BsangsHome/BsangsHomeMessageListModule";
import { BsangsHomeMessagesSectionModule } from "~/components/Modules/BsangsHome/BsangsHomeMessagesSectionModule";

type Props = {
  headerModuleProps: React.ComponentProps<typeof BsangsHomeHeaderModule>;
  footerModuleProps: React.ComponentProps<typeof BsangsHomeFooterModule>;

  messagesSectionModuleProps: React.ComponentProps<
    typeof BsangsHomeMessagesSectionModule
  >;
  messageListModuleProps: React.ComponentProps<
    typeof BsangsHomeMessageListModule
  >;
};

export default function BsangsHomeTemplate(props: Props) {
  return (
    <Layout style={{ height: "100%", backgroundColor: "#1F1F1F" }}>
      <BsangsHomeHeaderModule {...props.headerModuleProps} />
      <BsangsHomeMessagesSectionModule {...props.messagesSectionModuleProps} />
      <BsangsHomeMessageListModule {...props.messageListModuleProps} />
      <BsangsHomeFooterModule {...props.footerModuleProps} />
    </Layout>
  );
}
