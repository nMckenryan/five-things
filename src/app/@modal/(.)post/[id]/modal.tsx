"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

export function PostViewModal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={onDismiss}
      style={{
        padding: "0",
        border: "none",
        background: "#EDFA8B",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button className="closeButton" type="submit">
          <DeleteIcon />
        </Button>

        <Button className="editButton">
          <EditIcon />
        </Button>

        <Button
          onClick={onDismiss}
          style={{ border: "none", background: "none" }}
        >
          <CloseIcon style={{ cursor: "pointer" }} />
        </Button>
      </div>
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
}
