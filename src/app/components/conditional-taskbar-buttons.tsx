"use client";

import "~/styles/globals.css";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

import DeletePostButton from "./delete-post-button";
import { useContext } from "react";
import ModalContext from "../providers/ModalProvider";

export default function ConditionalTaskbarButtons({
  postId,
}: {
  postId: number;
}) {
  const { onDismiss, isUserAuthorisedToEdit } = useContext(ModalContext);
  return (
    <>
      {isUserAuthorisedToEdit ? (
        <>
          <DeletePostButton postIdToDelete={postId} dismissModal={onDismiss} />

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
