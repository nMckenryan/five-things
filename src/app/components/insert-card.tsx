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
  width: "95%",
  maxWidth: "600px",
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
    try {
      await createPost(
        data.subjectName,
        data.firstThing,
        data.secondThing,
        data.thirdThing,
        data.fourthThing,
        data.fifthThing
      );
      setToastMessage("Post Created");
      handleToastOpen();
      handleClose();
      setTimeout(() => window.location.reload(), 500);
    } catch (error) {
      setToastMessage("Error: " + String(error));
      handleToastOpen();
    }
  };

  return (
    <>
      <AddCircleIcon sx={{ color: "white" }} onClick={handleOpen} />
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={toastState}
        onClose={handleToastClose}
        message={toastMessage}
      />
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Card sx={style}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent sx={{ p: 0 }}>
                <div className="modalHeader">
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    Add New Five Things!
                  </Typography>
                </div>
                <Stack spacing={1}>
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
                sx={{ display: "flex", justifyContent: "space-between", px: 0 }}
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
