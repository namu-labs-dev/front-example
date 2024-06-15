import { FooterAtom } from "~/components/Atoms/FooterAtom/FooterAtom";

type Props = {
  title: string;
};

export const JehoHomeFooterModule = (props: Props) => {
  return <FooterAtom title={props.title} />;
};
