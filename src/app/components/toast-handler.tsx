"use client";
import Snackbar from "@mui/material/Snackbar";
import React, { createContext, useContext, useState, useCallback } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface ToastContextType {
  openToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export default function ToastHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [toastText, setToastText] = useState("");

  const openToast = useCallback((message: string) => {
    setToastText(message);
    setOpen(true);
  }, []);

  const closeToast = useCallback(
    (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === "clickaway") return;
      setOpen(false);
    },
    []
  );

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={closeToast}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <ToastContext.Provider value={{ openToast }}>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        onClose={closeToast}
        message={toastText}
        autoHideDuration={3000}
        sx={{ zIndex: 10000 }}
        action={action}
      />
      {children}
    </ToastContext.Provider>
  );
}

export const useToastContext = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }
  return context;
};
