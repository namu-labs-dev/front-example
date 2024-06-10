import Link from "next/link";

type Props = {
  links: string[];
};

export const LinkList = (props: Props) => {
  return (
    <div>
      <b>[Sample Pages]</b>
      {props.links.map((link) => (
        <div key={link}>
          <Link href={link}>{link}</Link>
        </div>
      ))}
    </div>
  );
};
