"use client";

import "~/styles/globals.css";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { SignedIn } from "@clerk/nextjs";
import ConditionalTaskbarButtons from "./conditional-taskbar-buttons";
import ModalContext from "../../providers/ModalProvider";

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
          padding: "0",
          border: "none",
          background: "#EDFA8B",
        }}
      >
        <div
          className="window-taskbar"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <SignedIn>
            <ConditionalTaskbarButtons postId={postId} />
          </SignedIn>

          <Button style={{ border: "none", background: "none" }} href="/">
            <CloseIcon style={{ cursor: "pointer" }} />
          </Button>
        </div>
        {children}
      </div>
    </ModalContext.Provider>
  );
}
