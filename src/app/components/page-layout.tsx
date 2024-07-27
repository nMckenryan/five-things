import "~/styles/globals.css";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import DeletePostButton from "./delete-button";
import { getPostUserId } from "~/server/queries";
import { auth } from "@clerk/nextjs/server";
import { SignedIn } from "@clerk/nextjs";

export default function PageLayout({
  postId,
  children,
}: {
  postId: number;
  children: React.ReactNode;
}) {
  const user = auth();
  const loggedInUserId = user.userId ?? "Not Logged In";
  let postUser = "";

  const postUserId = async () => {
    const result = await getPostUserId(postId);
    postUser = result ?? "Empty User Id";
  };

  const isUserAuthorisedToEdit = loggedInUserId === postUser;

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
            {isUserAuthorisedToEdit && (
              <>
                <DeletePostButton postIdToDelete={postId} />

                <Button className="editButton" href={`/post/${postId}/edit`}>
                  <EditIcon />
                </Button>
              </>
            )}
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
