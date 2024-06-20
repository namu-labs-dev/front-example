import { type MessageListContentProps } from "~/components/Components/MessageListContent/MessageListContent";
import { type MessagesSectionContentProps } from "~/components/Components/MessagesSectionContent/MessagesSectionContent";

export const MESSAGE_SECTION_CONTENTS: MessagesSectionContentProps[] = [
  {
    iconUrl: "/dummy/proximaLogo.svg",
    title: "Proxima",
    onClick: () => alert(`Clicked Proxima`),
  },
  {
    iconUrl: "/dummy/proximaLogo.svg",
    title: "Proxima2",
    onClick: () => alert(`Clicked Proxima2`),
  },
  {
    iconUrl: "/dummy/proximaLogo.svg",
    title: "Proxima3",
    onClick: () => alert(`Clicked Proxima3`),
  },
];

export const MESSAGE_LIST_CONTENTS: MessageListContentProps[] = [
  {
    iconUrl: "/dummy/eth.png",
    title: "Proxima",
    content:
      "User: namulabs is fantasic company fantasic company fantasic company",
    time: "12:00",
    isRead: true,
    onClick: () => alert(`Clicked Proxima`),
  },
  {
    iconUrl: "/dummy/nvir.png",
    title: "Proxima2",
    content: "Content",
    time: "12:00",
    isRead: true,
    onClick: () => alert(`Clicked Proxima2`),
  },
];
