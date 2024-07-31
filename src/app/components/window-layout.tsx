import "~/styles/globals.css";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { SignedIn } from "@clerk/nextjs";
import ConditionalTaskbarButtons from "./conditional-taskbar-buttons";

export default function WindowLayout({
  postId,
  isUserAuthorisedToEdit,
  dismissModal,
  children,
}: {
  postId: number;
  isUserAuthorisedToEdit: boolean;
  dismissModal: () => void;
  children: React.ReactNode;
}) {
  return (
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
          <ConditionalTaskbarButtons
            postId={postId}
            isUserAuthorisedToEdit={isUserAuthorisedToEdit}
            dismissModal={dismissModal}
          />
        </SignedIn>

        <Button style={{ border: "none", background: "none" }} href="/">
          <CloseIcon style={{ cursor: "pointer" }} />
        </Button>
      </div>
      {children}
    </div>
  );
}
