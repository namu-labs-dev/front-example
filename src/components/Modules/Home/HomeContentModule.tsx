import { LinkList } from "~/components/Components/LinkList/LinkList";
import { NumberList } from "~/components/Components/NumberList/NumberList";

type Props = {
  title: string;
  sampleLinks: string[];
  sampleNumbers: number[];
};

export const HomeContentModule = (props: Props) => {
  return (
    <div className="m-[20px]">
      <div className="text-[20px]">{props.title}</div>

      <div className="my-3">
        <LinkList links={props.sampleLinks} />
      </div>

      <NumberList numbers={props.sampleNumbers} />
    </div>
  );
};
