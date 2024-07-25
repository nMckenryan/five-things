import "~/styles/globals.css";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import DeleteButton from "./delete-button";

export default function WindowLayout({
  postId,
  children,
}: {
  postId: number;
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
        <DeleteButton postIdToDelete={postId} />
        <Button className="editButton" href={`/post/${postId}/edit`}>
          <EditIcon />
        </Button>

        <Button style={{ border: "none", background: "none" }} href="/">
          <CloseIcon style={{ cursor: "pointer" }} />
        </Button>
      </div>
      {children}
    </div>
  );
}
