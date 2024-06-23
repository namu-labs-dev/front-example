import React, { useState, useEffect } from "react";

type ModalProps = {
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [countdown, setCountdown] = useState(30); // countdown = 28s

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      onClose();
    }
  }, [countdown, onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#2C2D30] p-6 rounded-lg w-80 text-center">
        <h2 className="text-2xl mb-4 w-[55%] mx-auto">
          Transaction Processing
        </h2>
        <div className="mb-4">
          <img
            src="/transactionProcessing.png"
            alt="Processing"
            className="animate-pulse"
          />
        </div>
        <p>
          Uploading your transaction to the node. Please wait for a moment...
          This may take up to {Math.max(0, countdown)} seconds.
        </p>
      </div>
    </div>
  );
};

export default Modal;
