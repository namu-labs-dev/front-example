import { BsangsFooterAtom } from "~/components/Atoms/BsangsFooterAtom/BsangsFooterAtom";

type Props = React.ComponentProps<typeof BsangsFooterAtom>;

export const BsangsHomeFooterModule = (props: Props) => {
  return (
    <div className="fixed bottom-0 w-full max-w-[500px]">
      <BsangsFooterAtom {...props} />
    </div>
  );
};
