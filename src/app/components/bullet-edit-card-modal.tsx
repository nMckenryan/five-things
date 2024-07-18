import { Card, CardContent, Typography, CardActions, TextField } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../styles/bullet-card.css';
import Button from "@mui/material/Button";
import React from "react";

interface Props {
  subjectName: string;
  fiveGoodThings: string[];
  agreeCount: number;
  disagreeCount: number;
  dateCreated: Date;
  userId: string;
}

export default function BulletCardEditModal(props: Props, { editPost }: { editPost: (subjectName: string, fiveThing1: string, fiveThing2: string, fiveThing3: string, fiveThing4: string, fiveThing5: string) => Promise<void> }) {


    const [formData, setFormData] = React.useState({
        subjectName: "",
        n1: "",
        n2: "",
        n3: "",
        n4: "",
        n5: "",
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
        await editPost(formData.subjectName, formData.n1, formData.n2, formData.n3, formData.n4, formData.n5);
      };

    return (
        <Card className="fiveCardExpanded" sx={{ background: "#EDFA8B", boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.5)"}}>
        <form onSubmit={handleSubmit}>
          <CardContent style={{paddingTop: "0px", paddingBottom: "0px"}}>            
            <Typography variant="h5" component="div" className="subjectName">
                <TextField name="subjectName" value={props.subjectName}/>
            </Typography>            
              <ul className="goodBullets">
                <TextField name="n1" value={props.fiveGoodThings[0]} onChange={handleChange} />
                <TextField name="n2" value={props.fiveGoodThings[1]} onChange={handleChange} />
                <TextField name="n3" value={props.fiveGoodThings[2]} onChange={handleChange} />
                <TextField name="n4" value={props.fiveGoodThings[3]} onChange={handleChange} />
                <TextField name="n5" value={props.fiveGoodThings[4]} onChange={handleChange} />

              </ul>

          </CardContent>
          <CardActions className="opinionCountMain"  >
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
            </Button>
            <Button variant="outlined" endIcon={<AddCircleIcon />} type="submit">
                Edit
            </Button>
          </CardActions>
          </form>
        </Card>
      );
}

