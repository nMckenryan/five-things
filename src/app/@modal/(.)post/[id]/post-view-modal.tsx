"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import WindowLayout from "~/app/components/ui/window-layout";
import ModalContext from "~/app/providers/ModalProvider";

export function PostViewModal({
  postId,
  isUserAuthorisedToEdit,
  children,
}: {
  postId: number;
  isUserAuthorisedToEdit: boolean;
  children: React.ReactNode;
}) {
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
    <ModalContext.Provider value={{ isUserAuthorisedToEdit }}>
      <dialog
        ref={dialogRef}
        onClose={onDismiss}
        style={{
          padding: "0",
          border: "none",
          background: "#EDFA8B",
          zIndex: 10,
        }}
      >
        <WindowLayout
          postId={postId}
          isUserAuthorisedToEdit={isUserAuthorisedToEdit}
        >
          {children}
        </WindowLayout>
      </dialog>
    </ModalContext.Provider>,
    document.getElementById("modal-root")!
  );
}
