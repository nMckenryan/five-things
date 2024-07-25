"use client";

import { Card, CardContent, Typography, CardActions } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import React from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { createPost } from "../actions/actions";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

interface IFormInputs {
  subjectName: string;
  firstThing: string;
  secondThing: string;
  thirdThing: string;
  fourthThing: string;
  fifthThing: string;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#EDFA8B",
  boxShadow: 24,
  p: 2,
};

export default function InsertCard() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const [toastState, setToastState] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState("");

  const handleToastOpen = () => {
    setToastState(true);
  };

  const handleToastClose = () => {
    setToastState(false);
  };

  const { handleSubmit, control } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    console.log("Added", data);
    try {
      await createPost(
        data.subjectName,
        data.firstThing,
        data.secondThing,
        data.thirdThing,
        data.fourthThing,
        data.fifthThing
      );
      setToastMessage("Post Created!");
    } catch (error) {
      setToastMessage("Error: " + String(error));
    }
    handleToastOpen();
    handleClose();
  };

  return (
    <>
      <AddCircleIcon sx={{ color: "white" }} onClick={handleOpen} />

      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={toastState}
            onClose={handleToastClose}
            message={toastMessage}
          />
          <Card sx={style}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent>
                <div className="modalHeader">
                  <div></div>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ textAlign: "center" }}
                  >
                    Add New Five Things!
                  </Typography>
                  <Button onClick={handleClose}>
                    <CloseIcon style={{ cursor: "pointer" }} />
                  </Button>
                </div>
                <Stack
                  sx={{
                    width: "60ch",
                  }}
                  spacing={1}
                >
                  <Controller
                    name="subjectName"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        label="Subject"
                        className="thingInput"
                        variant="outlined"
                        color="success"
                        required
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    name="firstThing"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        label="First Thing"
                        className="thingInput"
                        variant="outlined"
                        color="success"
                        required
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    name="secondThing"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        label="Second Thing"
                        className="thingInput"
                        variant="outlined"
                        color="success"
                        required
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    name="thirdThing"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        label="Third Thing"
                        className="thingInput"
                        variant="outlined"
                        color="success"
                        required
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    name="fourthThing"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        label="Fourth Thing"
                        className="thingInput"
                        variant="outlined"
                        color="success"
                        required
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    name="fifthThing"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        label="Fifth Thing"
                        className="thingInput"
                        variant="outlined"
                        color="success"
                        required
                        {...field}
                      />
                    )}
                  />
                </Stack>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  variant="outlined"
                  startIcon={<CancelIcon />}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  variant="outlined"
                  endIcon={<AddCircleIcon />}
                  type="submit"
                >
                  Send
                </Button>
              </CardActions>
            </form>
          </Card>
        </>
      </Modal>
    </>
  );
}
