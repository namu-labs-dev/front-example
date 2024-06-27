import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  title: string;
  bg: string;
};

export const TestPage2HeaderModule = (props: Props) => {
  return (
    <HeaderAtom title={props.title} bg={props.bg} />
  );
};
