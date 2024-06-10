import { FooterAtom } from "~/components/Atoms/FooterAtom/FooterAtom";

type Props = {
  footerProps: React.ComponentProps<typeof FooterAtom>;
};

export const EmptyFooterModule = (props: Props) => {
  return <FooterAtom {...props.footerProps} />;
};
