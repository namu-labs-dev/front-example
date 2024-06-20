import { BsangsHeaderAtom } from "~/components/Atoms/BsangsHeaderAtom/BsangsHeaderAtom";

type Props = React.ComponentProps<typeof BsangsHeaderAtom>;

export const BsangsHomeHeaderModule = (props: Props) => {
  return (
    <div className="sticky top-0">
      <BsangsHeaderAtom {...props} />
    </div>
  );
};
