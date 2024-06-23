
export interface Message {
  iconImg: string;
  iconText: string;
  text: string;
  time: string;
  clicked: boolean;
  toggleClicked: () => void;
}

const getTime = (): string => {
  const date = new Date();
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

export const messages: Message[] = [
  {
    iconImg: "/ethereum.png",
    iconText: "ETH",
    text: "User: namulabs is fantasic company...",
    time: getTime(),
    clicked: true,
    toggleClicked: function () {
      this.clicked = !this.clicked;
    },
  },
  {
    iconImg: "/nv.png",
    iconText: "Nvir",
    text: "User: namulabs is fantasic company...",
    time: getTime(),
    clicked: false,
    toggleClicked: function () {
      this.clicked = !this.clicked;
    },
  },
  
];
