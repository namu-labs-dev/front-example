import { JehoHeaderAtom } from "~/components/Atoms/JehoHeaderAtom/JehoHeaderAtom";

type Props = {
  headerProps: React.ComponentProps<typeof JehoHeaderAtom>;
};

export const JehoHomeHeaderModule = (props: Props) => {
  return <JehoHeaderAtom {...props.headerProps} />;
};
