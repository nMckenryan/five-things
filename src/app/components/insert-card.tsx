"use client"; 

import { Card, CardContent, Typography, CardActions, Box } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import "../../styles/insert-card.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2
};


export default function InsertCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
      <>
        <Card className="fiveCard" sx={{ minWidth: 300, minHeight: 300, display: "flex", justifyContent: "center", alignItems: "center" }} onClick={handleOpen}>
          <CardContent>            
            <AddCircleIcon sx={{ fontSize: 100 }}/>
          </CardContent>
        </Card>
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card sx={style}>
          <CardContent>    
              <Stack
                component="form"
                sx={{
                  width: '60ch'
                }}
                spacing={1}
                noValidate
                autoComplete="off"
              >            
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: "center"}}>
                  Add New Five Things!
                </Typography> 
                <TextField id="outlined-basic" label="Subject" variant="outlined" color="success" />
                <TextField className="thingInput" label="Nice Thing 1" variant="outlined" color="success" required />
                <TextField className="thingInput" label="Nice Thing 2" variant="outlined" color="success" required/>
                <TextField className="thingInput" label="Nice Thing 3" variant="outlined" color="success" required/>
                <TextField className="thingInput" label="Nice Thing 4" variant="outlined" color="success" required />
                <TextField className="thingInput" label="Nice Thing 5" variant="outlined" color="success" required />
              </Stack>
            </CardContent>
          <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
            <Button variant="outlined" endIcon={<AddCircleIcon />}>
              Send
            </Button>
          </CardActions>
          </Card>
      </Modal>

        </>
      );
}
