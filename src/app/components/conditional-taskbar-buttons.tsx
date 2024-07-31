"use client";

import "~/styles/globals.css";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

import DeletePostButton from "./delete-post-button";

export default function ConditionalTaskbarButtons({
  postId,
  dismissModal,
  isUserAuthorisedToEdit,
}: {
  postId: number;
  dismissModal: () => void;
  isUserAuthorisedToEdit: boolean;
}) {
  return (
    <>
      {isUserAuthorisedToEdit ? (
        <>
          <DeletePostButton
            postIdToDelete={postId}
            dismissModal={dismissModal}
          />

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
