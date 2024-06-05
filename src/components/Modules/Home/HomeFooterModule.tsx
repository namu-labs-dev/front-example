import { FooterAtom } from "~/components/Atoms/FooterAtom/FooterAtom";

type Props = {
  title: string;
};

export const HomeFooterModule = (props: Props) => {
  return <FooterAtom title={props.title} />;
};
