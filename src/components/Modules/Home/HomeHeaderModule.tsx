import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  title: string;
};

export const HomeHeaderModule = (props: Props) => {
  return <HeaderAtom title={props.title} />;
};
