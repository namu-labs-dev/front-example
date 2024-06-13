import { Flex } from "antd";
import Image from "next/image";
import { TransactionModal } from "./TransactionModal";

interface Props {
  settingWallet: boolean;
}

const walletData = [
  {
    id: 1,
    img: "/eth.png",
    title: "ETH",
    time: "08:43 PM",
    desc: "User: namulabs is fantasic company...",
    isNew: true,
  },
  {
    id: 2,
    img: "/nvir.png",
    title: "Nvir",
    time: "08:43 PM",
    desc: "User: namulabs is fantasic company...",
    isNew: false,
  },
];

const transactionDetails = {
  title: "Transaction processing",
  desc: "Uploading your transaction to the node. please wait for a moment... This may take up to 2 minutes.",
};

export const WalletInfo: React.FC<Props> = ({ settingWallet }) => {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center">
      <Flex className="w-full flex-col gap-8">
        {walletData.map((item) => (
          <Flex className="w-full items-center gap-3" key={item.id}>
            <Image src={item.img} alt="" width={40} height={40} />

            <Flex className="w-full flex-col gap-1">
              <Flex className="justify-between text-white">
                <div>{item.title}</div>
                <div className="text-sm">{item.time}</div>
              </Flex>

              <Flex className="justify-between text-white">
                <div>{item.desc}</div>

                {item.isNew && (
                  <div
                    className="h-5 w-5 rounded-full text-center"
                    style={{ backgroundColor: "rgba(255, 77, 79, 1)" }}
                  >
                    N
                  </div>
                )}
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>

      {settingWallet && (
        <TransactionModal transactionDetails={transactionDetails} />
      )}
    </div>
  );
};
