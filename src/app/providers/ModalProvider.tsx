import { createContext } from "react";

interface ModalContextProps {
  onDismiss?: () => void;
  isUserAuthorisedToEdit: boolean;
}

const ModalContext = createContext<ModalContextProps>({
  onDismiss: () => {
    null;
  },
  isUserAuthorisedToEdit: false,
});

export default ModalContext;
