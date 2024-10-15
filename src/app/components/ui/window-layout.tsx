"use client";

import "~/styles/globals.css";

import ModalContext from "../../providers/ModalProvider";
import Taskbar from "./taskbar";

export default function WindowLayout({
  postId,
  isUserAuthorisedToEdit,
  children,
}: {
  postId: number;
  isUserAuthorisedToEdit: boolean;
  children: React.ReactNode;
}) {
  return (
    <ModalContext.Provider value={{ isUserAuthorisedToEdit }}>
      <div
        className="window"
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "50%",
          maxWidth: "70%",
          padding: "0",
          border: "none",
          background: "#E5F85A",
        }}
      >
        <Taskbar postId={postId} />
        {children}
      </div>
    </ModalContext.Provider>
  );
}
