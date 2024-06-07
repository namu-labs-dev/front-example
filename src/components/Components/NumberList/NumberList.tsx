type Props = {
  numbers: number[];
};

export const NumberList = (props: Props) => {
  return (
    <div>
      [Numbers]
      {props.numbers.map((number) => (
        <div key={number}>{number}</div>
      ))}
    </div>
  );
};
