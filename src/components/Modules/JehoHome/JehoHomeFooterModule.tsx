import { JehoFooterAtom } from "~/components/Atoms/JehoFooterAtom/JehoFooterAtom";

type Props = {
  title: string;
};

export const JehoHomeFooterModule = (props: Props) => {
  return <JehoFooterAtom title={props.title} />;
};
