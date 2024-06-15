import {
  memo,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import { DrawerContainerAtom } from "../DrawerContainerAtom/DrawerContainerAtom";

type Props = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
  containerClassName?: string;
};

const DrawerAtom = (props: PropsWithChildren<Props>) => {
  const [modalContainer, setModalContainer] = useState<HTMLDivElement | null>(
    null,
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const wasOpenRef = useRef(props.isDrawerOpen);

  const onClose = useCallback(() => {
    props.setIsDrawerOpen(false);
    setIsAnimating(true);
  }, []);

  useEffect(() => {
    const container = document.createElement("div");
    const modalRoot = document.getElementById("custom-drawer");
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

  useEffect(() => {
    if (wasOpenRef.current !== props.isDrawerOpen) {
      if (props.isDrawerOpen) {
        setIsAnimating(false);
      } else {
        setIsAnimating(true);
        const timeoutId = setTimeout(() => {
          setIsAnimating(false);
        }, 300);
        return () => clearTimeout(timeoutId);
      }
    }
    wasOpenRef.current = props.isDrawerOpen;
  }, [props.isDrawerOpen]);

  return (
    modalContainer &&
    (props.isDrawerOpen || isAnimating) &&
    ReactDOM.createPortal(
      <>
        <div className="  box-border overflow-auto text-center">
          <div
            className={` h-full w-full cursor-pointer bg-black opacity-50 transition-opacity duration-500 ease-in-out ${isAnimating ? "animate-fade-out" : "animate-fade-in"}`}
            onClick={() => onClose()}
          />
          <DrawerContainerAtom
            className={props.containerClassName}
            isOpen={props.isDrawerOpen}
          >
            {props.children}
          </DrawerContainerAtom>
        </div>
      </>,
      modalContainer,
    )
  );
};

export default memo(DrawerAtom);
