type Props = {
  title: string;
};

export const EmptyFirstModule = (props: Props) => {
  return <div>{props.title}</div>;
};
