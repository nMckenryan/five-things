"use server";

import "~/styles/globals.css";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { SignedIn } from "@clerk/nextjs";
import ConditionalTaskbarButtons from "./conditional-taskbar-buttons";
export default async function PageLayout({
  postId,
  children,
}: {
  postId: number;
  children: React.ReactNode;
}) {
  return (
    <div
      className="page-background"
      style={{
        background: "linear-gradient(to bottom, #256670, #1E425E)",
        height: "94.9vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "2rem",
      }}
    >
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
    </div>
  );
}
