import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { SignedIn } from "@clerk/nextjs";
import ConditionalTaskbarButtons from "./conditional-taskbar-buttons";

export default function Taskbar({ postId }: { postId: number }) {
  return (
    <div
      className="window-taskbar"
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <SignedIn>
        <ConditionalTaskbarButtons postId={postId} />
      </SignedIn>

      <Button
        style={{
          border: "none",
          background: "none",
        }}
        href="/"
      >
        <CloseIcon
          style={{
            cursor: "pointer",
          }}
        />
      </Button>
    </div>
  );
}
