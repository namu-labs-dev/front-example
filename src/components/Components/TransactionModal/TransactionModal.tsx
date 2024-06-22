import type { PropsWithChildren, Dispatch, SetStateAction } from "react";

import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { EkanModalContainer } from "~/components/Atoms/EkanModalContainer/EkanModalContainer";

type Props = {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

const TransactionModal = ({
  isModalOpen,
  setModalOpen,
}: PropsWithChildren<Props>) => {
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  if (!isModalOpen) return null;

  return (
    <EkanModalContainer>
      <EkanModalContainer.StyledModal
        className={`flex flex-col items-center gap-[1.5rem] p-[1.5rem]`}
        callback={handleCloseModal}
      >
        <EkanModalContainer.Title>
          Transaction Processing
        </EkanModalContainer.Title>
        <EkanModalContainer.Body>
          <SVGAtom iconName="cubes" width={250} height={150} />

          <p className="text-center text-white">
            Uploading your transaction to the node. please wait for a moment...
            This may take up to 2 minutes.
          </p>
        </EkanModalContainer.Body>
      </EkanModalContainer.StyledModal>
    </EkanModalContainer>
  );
};

export default TransactionModal;
