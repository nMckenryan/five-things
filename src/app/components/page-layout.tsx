import "~/styles/globals.css";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import DeleteButton from "./delete-button";
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
          <p>
            {loggedInUserId}
            <br />
            {postUserId()}
          </p>
          <SignedIn>
            {isUserAuthorisedToEdit && (
              <>
                <DeleteButton postIdToDelete={Number(postId)} />

                <Button className="editButton" href={`/post/${postId}/edit`}>
                  <EditIcon />
                </Button>
              </>
            )}
          </SignedIn>

          <Button>
            <CloseIcon style={{ cursor: "pointer" }} />
          </Button>
        </div>
        {children}
      </div>
    </div>
  );
}
