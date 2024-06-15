import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import {
  memo,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import ReactDOM from "react-dom";
import { JehoModalContainer } from "~/components/Atoms/JehoModalContainer/JehoModalContainer";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  isModalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  containerClassName?: string;
};

const TransactionModal = (props: PropsWithChildren<Props>) => {
  const [modalContainer, setModalContainer] = useState<HTMLDivElement | null>(
    null,
  );

  useEffect(() => {
    const container = document.createElement("div");
    const modalRoot = document.getElementById("custom-modal");
    if (modalRoot) {
      modalRoot?.appendChild(container);
      setModalContainer(container);
    }

    return () => {
      if (modalRoot) {
        modalRoot?.removeChild(container);
      }
    };
  }, []);

  const onClose = useCallback(() => {
    if (props.isModalOpen) {
      props.setModalOpen(false);
    }
  }, [props.isModalOpen]);

  return (
    modalContainer &&
    ReactDOM.createPortal(
      <>
        {props.isModalOpen ? (
          <div className="fixed inset-0 z-[1000] box-border overflow-auto text-center">
            <div
              className="pointer fixed h-full w-full bg-black opacity-50"
              onClick={onClose}
            />
            <JehoModalContainer
              className={`${props.containerClassName} flex flex-col items-center gap-[20px] px-[20px] py-[20px]`}
            >
              <Title
                style={{ color: "white" }}
                className="text-center"
                level={2}
              >
                Transaction processing
              </Title>
              <SVGAtom iconName="cubes" width={250} height={150} />
              <Paragraph style={{ color: "white" }} className="text-center">
                Uploading your transaction to the node. please wait for a
                moment... This may take up to 2 minutes.
              </Paragraph>
            </JehoModalContainer>
          </div>
        ) : null}
      </>,
      modalContainer,
    )
  );
};

export default memo(TransactionModal);
