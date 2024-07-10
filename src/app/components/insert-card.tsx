"use client"; 

import { Card, CardContent, Typography, CardActions } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import "../../styles/insert-card.css";
import { useUser } from "@clerk/nextjs";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2
};


export default function InsertCard({ createPost }: { createPost: (subjectName: string, fiveThing1: string, fiveThing2: string, fiveThing3: string, fiveThing4: string, fiveThing5: string, userName: string) => Promise<void> }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useUser();

  const currentUsername = user?.username ?? "";

  const [formData, setFormData] = React.useState({
    subjectName: "",
    n1: "",
    n2: "",
    n3: "",
    n4: "",
    n5: "",
    userName: currentUsername
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createPost(formData.subjectName, formData.n1, formData.n2, formData.n3, formData.n4, formData.n5, formData.userName);
    handleClose();
  };

    return (
      <>
        <AddCircleIcon sx={{ color: "white" }} onClick={handleOpen}/>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card sx={style}>
            <form onSubmit={handleSubmit}>
              <CardContent>    
                  <Stack
                    sx={{
                      width: '60ch'
                    }}
                    spacing={1}
                  >            
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: "center"}}>
                      Add New Five Things!
                    </Typography> 
                    <TextField className="thingInput" label="Subject" name="subjectName" variant="outlined" color="success" onChange={handleChange} required />
                    <TextField className="thingInput" label="Nice Thing 1" name="n1" variant="outlined" color="success" onChange={handleChange} required />
                    <TextField className="thingInput" label="Nice Thing 2" name="n2" variant="outlined" color="success" onChange={handleChange} required/>
                    <TextField className="thingInput" label="Nice Thing 3" name="n3" variant="outlined" color="success"  onChange={handleChange} required/>
                    <TextField className="thingInput" label="Nice Thing 4" name="n4" variant="outlined" color="success" onChange={handleChange} required />
                    <TextField className="thingInput" label="Nice Thing 5" name="n5" variant="outlined" color="success" onChange={handleChange} required />
                  </Stack>
                </CardContent>
              <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
                <Button variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
                <Button variant="outlined" endIcon={<AddCircleIcon />} type="submit">
                  Send
                </Button>
              </CardActions>
          </form>
          </Card>
      </Modal>

        </>
      );
}
