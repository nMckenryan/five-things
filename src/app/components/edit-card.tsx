"use client";

import {
  Card,
  CardContent,
  CardActions,
  TextField,
  CardHeader,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../../styles/bullet-card.css";
import Button from "@mui/material/Button";
import React from "react";
import Stack from "@mui/material/Stack";

import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { updatePost } from "../actions/actions";
import CloseIcon from "@mui/icons-material/Close";
import CancelIcon from "@mui/icons-material/Cancel";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DeletePostButton from "./ui/delete-post-button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#EDFA8B",
  boxShadow: 24,
  p: 1,
  width: "95%",
  maxWidth: "600px",
};

interface Props {
  subjectName: string;
  postThing1: string;
  postThing2: string;
  postThing3: string;
  postThing4: string;
  postThing5: string;
  postId: number;
}

interface IFormInputs {
  subjectName: string;
  postThing1: string;
  postThing2: string;
  postThing3: string;
  postThing4: string;
  postThing5: string;
}

export default function EditCard(props: Props) {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    console.log("submitted", data);
    await updatePost(
      props.postId,
      data.subjectName,
      data.postThing1,
      data.postThing2,
      data.postThing3,
      data.postThing4,
      data.postThing5
    );

    router.back();
  };

  return (
    <Card sx={style}>
      <div
        className="window-taskbar"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <DeletePostButton postIdToDelete={props.postId} />
        <CardHeader title={props.subjectName} />
        <Link href="/">
          <Button style={{ border: "none", background: "none" }}>
            <CloseIcon style={{ cursor: "pointer" }} />
          </Button>
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent style={{ paddingTop: "0px", paddingBottom: "0px" }}>
          <Stack spacing={1}>
            <Controller
              name="subjectName"
              control={control}
              rules={{ required: true }}
              defaultValue={props.subjectName}
              render={({ field }) => <TextField {...field} />}
            />

            <Controller
              name="postThing1"
              control={control}
              rules={{ required: true }}
              defaultValue={props.postThing1}
              render={({ field }) => (
                <TextField
                  multiline
                  rows={4}
                  placeholder={props.postThing1}
                  {...field}
                />
              )}
            />

            <Controller
              name="postThing2"
              control={control}
              rules={{ required: true }}
              defaultValue={props.postThing2}
              render={({ field }) => (
                <TextField
                  multiline
                  rows={4}
                  placeholder={props.postThing2}
                  {...field}
                />
              )}
            />

            <Controller
              name="postThing3"
              control={control}
              rules={{ required: true }}
              defaultValue={props.postThing3}
              render={({ field }) => (
                <TextField
                  multiline
                  rows={4}
                  placeholder={props.postThing3}
                  {...field}
                />
              )}
            />

            <Controller
              name="postThing4"
              control={control}
              rules={{ required: true }}
              defaultValue={props.postThing4}
              render={({ field }) => (
                <TextField
                  multiline
                  rows={4}
                  placeholder={props.postThing4}
                  {...field}
                />
              )}
            />

            <Controller
              name="postThing5"
              control={control}
              rules={{ required: true }}
              defaultValue={props.postThing5}
              render={({ field }) => (
                <TextField
                  multiline
                  rows={4}
                  placeholder={props.postThing5}
                  {...field}
                />
              )}
            />

            {errors.subjectName && <span>This field is required</span>}
          </Stack>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            mx: 1,
          }}
        >
          <Button variant="outlined" endIcon={<CancelIcon />} href="/">
            Cancel
          </Button>

          <Button variant="outlined" endIcon={<AddCircleIcon />} type="submit">
            Edit
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
