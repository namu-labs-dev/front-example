type Props = {
  title: string;
};

export const BsangsVoteHeaderModule = (props: Props) => {
  return (
    <div className="sticky top-0 flex h-[60px] content-center justify-center">
      <span className="self-center text-[18px] font-bold">{props.title}</span>
    </div>
  );
};
