type Props = {
  title: string;
};

export const BsangsVoteHeaderModule = (props: Props) => {
  return (
    <div className="flex min-h-[60px] content-center justify-center">
      <span className="self-center text-[18px] font-bold">{props.title}</span>
    </div>
  );
};
