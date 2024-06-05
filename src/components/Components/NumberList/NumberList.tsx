type Props = {
  numbers: number[];
};

export const NumberList = (props: Props) => {
  return props.numbers.map((number) => <div key={number}>{number}</div>);
};
