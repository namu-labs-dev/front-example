import { Layout } from "antd";
import { BsangsFooterAtom } from "~/components/Atoms/BsangsFooterAtom/BsangsFooterAtom";
import { BsangsHeaderAtom } from "~/components/Atoms/BsangsHeaderAtom/BsangsHeaderAtom";

type Props = {
  headerModuleProps: React.ComponentProps<typeof BsangsHeaderAtom>;
  footerModuleProps: React.ComponentProps<typeof BsangsFooterAtom>;
};

export default function BsangsHomeTemplate(props: Props) {
  return (
    <Layout style={{ height: "100%" }}>
      <div className="sticky top-0">
        <BsangsHeaderAtom {...props.headerModuleProps} />
      </div>

      <div className="fixed bottom-0 w-full max-w-[500px]">
        <BsangsFooterAtom {...props.footerModuleProps} />
      </div>
    </Layout>
  );
}
