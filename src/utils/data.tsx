import * as svgs from "public/svgs";

interface FooterNavigationItem {
  name: string;
  icon: keyof typeof svgs;
  active: boolean;
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
