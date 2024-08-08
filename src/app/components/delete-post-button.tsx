"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import "../../styles/bullet-card.css";
import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deletePost } from "../actions/actions";
import { useRouter } from "next/navigation";
import { useToastContext } from "./toast-handler";

export default function DeletePostButton({
  postIdToDelete,
}: {
  postIdToDelete: number;
}) {
  const [open, setOpen] = React.useState(false);

  const { openToast } = useToastContext();

  const router = useRouter();

  const handleDeleteModalOpen = () => {
    setOpen(true);
  };

  const handleDeleteModalClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  let timeoutId: NodeJS.Timeout;

  async function confirmDeletePost() {
    try {
      await deletePost(postIdToDelete);
      openToast("Post Deleted");
      handleDeleteModalClose();
      router.back();
      router.push("/");
      router.refresh();
    } catch (error) {
      openToast("Error: " + String(error));
    }
  }

  return (
    <>
      <Button className="closeButton" onClick={handleDeleteModalOpen}>
        <DeleteIcon />
      </Button>

      <dialog
        ref={(dialog) => {
          if (dialog) {
            dialog.open = open;
          }
        }}
        onClose={handleDeleteModalClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{
          padding: "0",
          border: "none",
          background: "#EDFA8B",
          zIndex: 20,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <DialogTitle id="alert-dialog-title">Delete this Post?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteModalClose}>Cancel</Button>
          <Button
            onClick={async () => {
              await confirmDeletePost();
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </dialog>
      {/* Blurs background when dialog open */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 10,
          }}
        />
      )}
    </>
  );
}
