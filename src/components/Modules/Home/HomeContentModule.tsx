type Props = {
  title: string;
};

export const HomeContentModule = (props: Props) => {
  const NumberList = () => {
    return (
      <div>
        {Array.from({ length: 100 }, (_, i) => i + 1).map((number) => (
          <div key={number}>{number}</div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {props.title}
      <br />
      <NumberList />
    </div>
  );
};
