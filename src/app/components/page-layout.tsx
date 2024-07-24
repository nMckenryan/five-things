import "~/styles/globals.css";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import DeleteButton from "./delete-button";

export default function PageLayout({
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
        background: "linear-gradient(to bottom, #256670, #1E425E);",
        height: "93vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "2rem",
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
          <DeleteButton postIdToDelete={postId} />
          <Button className="editButton" href={`/post/${postId}/edit`}>
            <EditIcon />
          </Button>

          <Button style={{ border: "none", background: "none" }}>
            <CloseIcon style={{ cursor: "pointer" }} />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}
