"use client";
import Snackbar from "@mui/material/Snackbar";
import { createContext, useContext, useState } from "react";

// const ToastContext = createContext(true, "ToastContext");

export default function ToastHandler({
  toastOpen,
  toastText,
}: {
  toastOpen: boolean;
  toastText: string;
}) {
  const [toastState, setToastState] = useState(toastOpen);

  return (
    // <ToastContext.Provider value={{ setToastState, toastText }}>
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={toastState}
      onClose={() => setToastState(false)}
      message={toastText}
    />
    // </ToastContext.Provider>
  );
}
