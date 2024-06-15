import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  title: string;
  onClickLeftIcon: () => void;
  onClickRightIcon: () => void;
};

export const TestPage1HeaderModule = (props: Props) => {
  return (
    <HeaderAtom title={props.title} onClickRightIcon={props.onClickRightIcon} onClickLeftIcon={props.onClickLeftIcon} bgColor="black" leftIcon="atomicon" color="custom-light"/>
  );
};
