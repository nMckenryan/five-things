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

interface DeleteProps {
  postIdToDelete: number;
}

export default function DeletePostButton(props: DeleteProps) {
  const [open, setOpen] = React.useState(false);

  const router = useRouter();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
          <Button onClick={handleClose}>No</Button>
          <Button
            onClick={async () => {
              await deletePost(props.postIdToDelete);
              router.push("/");
            }}
          >
            Yes
          </Button>
        </DialogActions>
      </dialog>
      <Button className="closeButton" onClick={handleClickOpen}>
        <DeleteIcon />
      </Button>
    </>
  );
}
