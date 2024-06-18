import type { MessageListContentProps } from "~/components/Components/MessageListContent/MessageListContent";

import { timeAgo } from "../utils";

export const MESSAGES: MessageListContentProps[] = [
  {
    iconUrl: "/image/eth.png",
    title: "ETH",
    content: "User: namulabs is fantasic company....",
    time: timeAgo(),
    isRead: true,
  },
  {
    iconUrl: "/image/nvir.png",
    title: "Nvir",
    content: "User: namulabs is fantasic company....",
    time: timeAgo(true),
    isRead: false,
  },
];
