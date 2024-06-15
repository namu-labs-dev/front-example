import { Button } from "antd";
import Modal from "~/components/Atoms/Modal/Modal";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import Image from "next/image";

type Props = {
  modalProps: React.ComponentProps<typeof Modal>;
  title: string;
  description: string;
};

export const TestPage1ContentCustomModal = (props: Props) => {
  return (
    <Modal {...props.modalProps}>
      <div className="flex h-fit w-custom flex-col gap-4 p-8">
        <h1 className="font-inter text-center text-[24px] font-bold leading-[31px] text-white">
          {props.title}
        </h1>
        <div className="flex justify-center">
          {/* <SVGAtom iconName="shield" /> */}
          <Image
            src="/img/Frame4.png"
            alt="shield img"
            width={400}
            height={300}
          />
        </div>
        <p className="font-pretendard text-center text-[16px] font-normal leading-[26px] text-white">
          {props.description}
        </p>
        {/* <Button onClick={() => props.modalProps.setModalOpen(false)}>
          close
        </Button> */}
      </div>
    </Modal>
  );
};
