import { LinkList } from "~/components/Components/LinkList/LinkList";

type Props = {
  sampleLinks: string[];
};

export const HomeContentModule = (props: Props) => {
  return (
    <div className="py-3">
      <LinkList links={props.sampleLinks} />
    </div>
  );
};
