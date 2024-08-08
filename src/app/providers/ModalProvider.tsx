import { createContext } from "react";

interface ModalContextProps {
  isUserAuthorisedToEdit: boolean;
}

const ModalContext = createContext<ModalContextProps>({
  isUserAuthorisedToEdit: false,
});

export default ModalContext;
