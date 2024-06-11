import { TransactionProcessingModal } from "~/components/Components/TransactionProcessingModal/TransactionProcessingModal";

type Props = {
  isOpen: boolean;
  onClickBackground: () => void;
};

export const BsangsHomeModalModule = (props: Props) => {
  return (
    <TransactionProcessingModal
      isOpen={props.isOpen}
      onClickBackground={props.onClickBackground}
    />
  );
};
