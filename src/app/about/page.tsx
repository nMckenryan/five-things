"use client";

import { Card, CardContent, CardActions, CardHeader } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#EDFA8B",
  boxShadow: 24,
  p: 2,
  width: "95%",
  maxWidth: "600px",
};

export default function AboutPage() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <InfoIcon sx={{ color: "white" }} onClick={handleOpen} />
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Card sx={style}>
            <CardHeader
              title="About Five Things!"
              sx={{ fontWeight: "bold", paddingBottom: 0 }}
            />
            <CardContent sx={{ marginTop: "0px", lineHeight: 1.5 }}>
              Five Things! is a simple little web app where you can share your
              thoughts on things you like. <br /> <br /> Movies, Films, Books,
              Garden Equipment, the choice is yours. Don't worry about writing
              lengthy treatises, just give five sentences about what you liked
              about something!
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "right",
              }}
            >
              <Button
                variant="outlined"
                startIcon={<CancelIcon />}
                onClick={handleClose}
              >
                OK
              </Button>
            </CardActions>
          </Card>
        </>
      </Modal>
    </>
  );
}
