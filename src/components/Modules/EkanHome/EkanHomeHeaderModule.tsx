import { EkanHeaderAtom } from "~/components/Atoms/EkanHeaderAtom/EkanHeaderAtom";

type Props = {
  headerProps: React.ComponentProps<typeof EkanHeaderAtom>;
};

export const EkanHomeHeaderModule = ({ headerProps }: Props) => {
  return <EkanHeaderAtom {...headerProps} />;
};
