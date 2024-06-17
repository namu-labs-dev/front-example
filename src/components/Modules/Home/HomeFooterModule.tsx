import { FooterAtom } from "~/components/Atoms/FooterAtom/FooterAtom";

type Props = {
  children: string | React.ReactNode;
  footerClass?: string;
  footerChildClass?: string
};

export const HomeFooterModule = (props: Props) => {
  return <FooterAtom children={props.children} footerClass={props.footerClass} footerChildClass={props.footerChildClass}/>;
};
