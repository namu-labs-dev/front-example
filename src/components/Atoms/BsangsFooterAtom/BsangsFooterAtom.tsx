type Props = {
  title: string;
};

export const BsangsFooterAtom = (props: Props) => {
  return (
    <div className="flex h-full items-center justify-center bg-[#FFC96F]">
      <div>{props.title}</div>
    </div>
  );
};
