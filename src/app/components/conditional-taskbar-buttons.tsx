"use server";

import "~/styles/globals.css";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

import { getPostUserId } from "~/server/queries";
import { auth } from "@clerk/nextjs/server";
import DeletePostButton from "./delete-post-button";

export default async function ConditionalTaskbarButtons({
  postId,
}: {
  postId: number;
}) {
  const user = auth();
  const loggedInUserId = user.userId ?? "Not Logged In";

  const postUserId = await getPostUserId(postId);

  const isUserAuthorisedToEdit = postUserId === loggedInUserId;

  return (
    <>
      {isUserAuthorisedToEdit ? (
        <>
          <DeletePostButton postIdToDelete={postId} />

          <Button className="editButton" href={`/post/${postId}/edit`}>
            <EditIcon />
          </Button>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
