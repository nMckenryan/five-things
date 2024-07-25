"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import WindowLayout from "~/app/components/window-layout";

export function PostViewModal({
  postId,
  children,
}: {
  postId: number;
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
      <WindowLayout postId={postId}>{children}</WindowLayout>
    </dialog>,
    document.getElementById("modal-root")!
  );
}
