import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  title: string;
  onClickLeftIcon: () => void;
};

export const PageWithModalHeaderModule = (props: Props) => {
  return (
    <HeaderAtom title={props.title} onClickLeftIcon={props.onClickLeftIcon} />
  );
};
