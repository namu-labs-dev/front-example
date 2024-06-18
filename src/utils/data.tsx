import * as svgs from "public/svgs";
import ETHImage from "public/pngs/users/ETH-avatar.png";
import NvirImage from "public/pngs/users/Nvir-avatar.png";

interface FooterNavigationItem {
  name: string;
  icon: keyof typeof svgs;
  active: boolean;
}

export interface Messages {
  imageSrc?: typeof ETHImage | typeof NvirImage;
  name: string;
  message: string;
  date: Date;
  read: boolean;
}

export const footerNavigation: FooterNavigationItem[] = [
  {
    name: "Balance",
    icon: "dollarIcon",
    active: false,
  },
  {
    name: "Inbox",
    icon: "messageIcon",
    active: false,
  },
  {
    name: "Wallet",
    icon: "walletIcon",
    active: true,
  },
  {
    name: "History",
    icon: "historyIcon",
    active: false,
  },
];

export const messages: Messages[] = [
  {
    imageSrc: ETHImage,
    name: "ETH",
    message:
      "User: namulabs is fantastic company. Namulabs is fantastic company.",
    date: new Date("2024-06-20T16:43:00"),
    read: false,
  },
  {
    imageSrc: NvirImage,
    name: "Nvir",
    message:
      "User: namulabs is fantastic company. Namulabs is fantastic company.",
    date: new Date("2024-06-20T08:42:00"),
    read: true,
  },
];
