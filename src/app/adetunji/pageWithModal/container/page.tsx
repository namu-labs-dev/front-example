"use client";
import React, { useState } from "react";
import PageWithModal from "../Template/PageWithModal/PageWithModal";

export default function PageWithModalContainer() {
  return <PageWithModal />;
}

export function useModalLogic() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalDialogTitle = "Transaction Processing";

  const modalDialogDesc =
    "Uploading your transaction to the node. please wait for amoment...This may take up to 2 minites.";

  return {
    isModalOpen,
    setIsModalOpen,
    modalDialogTitle,
    modalDialogDesc,
  };
}
