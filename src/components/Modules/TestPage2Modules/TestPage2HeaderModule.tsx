import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  headerProps: React.ComponentProps<typeof HeaderAtom>;
};

export const TestPage2HeaderModule = (props: Props) => {
  return <HeaderAtom {...props.headerProps} />;
};
