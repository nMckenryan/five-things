"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import "../../styles/bullet-card.css";
import Button from "@mui/material/Button";
import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deletePost } from "../actions/actions";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";

interface DeleteProps {
  postIdToDelete: number;
}

export default function DeletePostButton(props: DeleteProps) {
  const [open, setOpen] = React.useState(false);

  const [toastState, setToastState] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleToastOpen = () => {
    setToastState(true);
  };

  const handleToastClose = () => {
    setToastState(false);
  };

  const router = useRouter();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function confirmDeletePost() {
    try {
      await deletePost(props.postIdToDelete);
      setToastMessage("Post Deleted");
      handleToastOpen();
      handleClose();
      router.refresh();
      setTimeout(() => router.push("/"), 500);
    } catch (error) {
      setToastMessage("Error: " + String(error));
      handleToastOpen();
    }
  }

  return (
    <>
      <Button className="closeButton" onClick={handleClickOpen}>
        <DeleteIcon />
      </Button>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={toastState}
        onClose={handleToastClose}
        message={toastMessage}
      />

      <dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete this Post?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={async () => {
              await confirmDeletePost();
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </dialog>
    </>
  );
}
