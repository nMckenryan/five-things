"use client";

import { Card, CardContent, CardActions, CardHeader } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { createPost } from "../actions/actions";
import { useRouter } from "next/navigation";
import { useToastContext } from "./ui/toast-handler";

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

  const { openToast } = useToastContext();

  const router = useRouter();

  const { handleSubmit, reset, formState, control } = useForm<IFormInputs>();

  function resetForm() {
    reset({
      subjectName: "",
      firstThing: "",
      secondThing: "",
      thirdThing: "",
      fourthThing: "",
      fifthThing: "",
    });
  }

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      resetForm();
    }
  }, [formState, reset]);

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      await createPost(
        data.subjectName,
        data.firstThing,
        data.secondThing,
        data.thirdThing,
        data.fourthThing || "",
        data.fifthThing || ""
      );
      openToast("Post Created!");
      handleClose();

      router.push("/");
      router.refresh();
    } catch (error) {
      openToast("Error: " + String(error));
    }
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
          <Card sx={style}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardHeader
                title="Add New Five Things!"
                sx={{ fontWeight: "bold", paddingLeft: 0.5 }}
              />
              <CardContent sx={{ p: 0 }}>
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
                        inputProps={{ maxLength: 140 }}
                        style={{ marginBottom: 15 }}
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
                        inputProps={{ maxLength: 140 }}
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
                        inputProps={{ maxLength: 140 }}
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
                        inputProps={{ maxLength: 140 }}
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
                        inputProps={{ maxLength: 140 }}
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
                        inputProps={{ maxLength: 140 }}
                      />
                    )}
                  />
                </Stack>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  px: 0,
                  pt: 3,
                }}
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
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={resetForm}
                >
                  Clear
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
