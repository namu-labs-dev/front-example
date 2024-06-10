import { Button } from "antd";
import { ModalContainer } from "~/components/Atoms/ModalContainer/ModalContainer";
import ModalStore from "~/store/ModalStore";

export type TitleAndContentModalProps = {
  title: string;
  description: string;
};

export const TitleAndContentModal = () => {
  const { data } = ModalStore.state;
  const { TitleAndContent } = data ?? {};

  return (
    <ModalContainer>
      <div className="flex h-fit w-80 flex-col gap-4 p-8">
        <h1 className="text-2xl">{TitleAndContent?.title}</h1>
        <p>{TitleAndContent?.description}</p>
        <Button onClick={() => ModalStore.close()}>close</Button>
      </div>
    </ModalContainer>
  );
};
