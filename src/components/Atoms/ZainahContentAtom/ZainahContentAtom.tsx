import { Flex } from "antd";
import Image from "next/image";
import { WalletInfo } from "~/components/Components/ZainahContentComponent/ZainahContentComponent";

interface Props {
  contentClicked: boolean;
}

export const ZainahContentAtom: React.FC<Props> = ({ contentClicked }) => {
  return (
    <Flex className="relative h-full flex-col gap-0">
      <Flex className="h-1/3 flex-col gap-4 p-10 pb-6">
        <div className="text-2xl font-black text-white">Messages</div>

        <Image src="/Proxima.png" alt="" width={50} height={50} />
      </Flex>

      <div
        className="h-2/3  rounded-t-2xl p-10"
        style={{ backgroundColor: "rgba(44, 45, 48, 1)" }}
      >
        <WalletInfo settingWallet={contentClicked} />
      </div>

      {contentClicked && (
        <div className="absolute z-10 h-full w-full bg-black opacity-60"></div>
      )}
    </Flex>
  );
};
