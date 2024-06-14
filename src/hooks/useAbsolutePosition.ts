import { useEffect, useState, useCallback } from "react";

export const useAbsolutePosition = (id: string) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const updatePosition = useCallback(() => {
    const connectDappButton = document.getElementById(id);
    if (connectDappButton) {
      const rect = connectDappButton.getBoundingClientRect();
      if (rect.left !== x || rect.top !== y) {
        setX(rect.left);
        setY(rect.top);
      }
    }
  }, [id, x, y]);

  useEffect(() => {
    updatePosition();

    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, [id, updatePosition]);

  return {
    x,
    y,
  };
};
