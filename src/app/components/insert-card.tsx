"use client"; 

import { Card, CardContent, Typography, CardActions, Box } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


export default function InsertCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
      <>
        <Card className="fiveCard" sx={{ minWidth: 300, minHeight: 300, display: "flex", justifyContent: "center" }} onClick={handleOpen}>
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
            <TextField id="outlined-basic" label="Subject" variant="outlined" color="success"  />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2}}>
              <TextField id="outlined-basic" label="Nice Thing 1" variant="outlined" color="success"  />
              <TextField id="outlined-basic" label="Nice Thing 2" variant="outlined" color="success"  />
              <TextField id="outlined-basic" label="Nice Thing 3" variant="outlined" color="success" />
              <TextField id="outlined-basic" label="Nice Thing 4" variant="outlined" color="success" />
              <TextField id="outlined-basic" label="Nice Thing 5" variant="outlined" color="success" />
            </Typography>
            </CardContent>
          <CardActions>
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
