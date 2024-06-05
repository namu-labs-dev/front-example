import Link from "next/link";

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
    <div className="m-[20px]">
      <div className="text-[20px]">{props.title}</div>

      <div className="my-3">
        [Links]
        <div>
          <Link href="/empty">/empty</Link>
        </div>
        <div>
          <Link href="/pageWithModal">/pageWithModal</Link>
        </div>
      </div>

      <NumberList />
    </div>
  );
};
