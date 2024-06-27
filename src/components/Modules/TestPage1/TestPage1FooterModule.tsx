import { type FooterTabs } from "~/app/michael/testPage1/container/TestPage1Container";
import { FooterAtom } from "~/components/Atoms/FooterAtom/FooterAtom";

export type footerProps = {
  changeTab: (tab: number) => void;
  tabs: FooterTabs[];
  currentTab: number;
}; // II thought it was better not to repeat this declaration, so I exported it to be reused in the Atom

export default function TestPage1FooterModule(props: footerProps) {
  return <FooterAtom {...props} />;
}
