'use client'

import { Card, CardContent, CardActions, TextField } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../styles/bullet-card.css';
import Button from "@mui/material/Button";
import React from "react";

import { useForm, type SubmitHandler, Controller } from "react-hook-form"
import { updatePost } from "../actions/actions";

interface Props {
  subjectName: string;
  n1: string;
  n2: string;
  n3: string;
  n4: string;
  n5: string;
  postId: number;
}

interface IFormInputs {
  subjectName: string;
  n1: string;
  n2: string;
  n3: string;
  n4: string;
  n5: string;
}

export default function BulletCardEditModal( props: Props) {
      const {
        handleSubmit,
        control,
        formState: { errors },
      } = useForm<IFormInputs>(
      )
      const onSubmit: SubmitHandler<IFormInputs> = async (data) => 
        {
          console.log("submitted", data);
          await updatePost(props.postId, data.subjectName, data.n1, data.n2, data.n3, data.n4, data.n5);
        }

    return (
        <Card className="fiveCardExpanded" sx={{ background: "#EDFA8B", boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.5)"}}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent style={{paddingTop: "0px", paddingBottom: "0px"}}>            

            <Controller
            name="subjectName"
            control={control}
            rules={{ required: true }}  
            defaultValue={props.subjectName}
            render={({ field }) => (
              <TextField {...field}/>
            )}
            />


          <Controller
            name="n1"
            control={control}
            rules={{ required: true }}  
            defaultValue={props.n1}
            render={({ field }) => (
              <TextField placeholder={props.n1} {...field}/>
            )}
            />

            <Controller 
            name="n2"
            control={control}
            rules={{ required: true }}  
            defaultValue={props.n2}
            render={({ field }) => (
              <TextField placeholder={props.n2} {...field}/>
            )}
            />

            <Controller 
            name="n3"
            control={control}
            rules={{ required: true }}  
            defaultValue={props.n3}
            render={({ field }) => (
              <TextField placeholder={props.n3} {...field}/>
            )}
            />  

            <Controller
            name="n4"
            control={control}
            rules={{ required: true }}  
            defaultValue={props.n4}
            render={({ field }) => (
              <TextField placeholder={props.n4} {...field}/>
            )}
            />

            <Controller
            name="n5"
            control={control}
            rules={{ required: true }}  
            defaultValue={props.n5}
            render={({ field }) => (
              <TextField placeholder={props.n5} {...field}/>
            )}
            />  

            {errors.subjectName && <span>This field is required</span>}
            </CardContent>
            <CardActions className="opinionCountMain"  >
              <div>{errors.subjectName && <span>This field is required</span>}</div>              
              <div>{errors.n1 && <span>This field is required</span>}</div>
              <div>{errors.n2 && <span>This field is required</span>}</div>
              <div>{errors.n3 && <span>This field is required</span>}</div>
              <div>{errors.n4 && <span>This field is required</span>}</div>
              <div>{errors.n5 && <span>This field is required</span>}</div>
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

