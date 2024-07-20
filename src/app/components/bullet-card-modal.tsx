import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import '../../styles/bullet-card.css';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deletePost } from "~/server/queries";
import Link from "next/link";

interface Props {
  subjectName: string;
  fiveGoodThings: string[];
  agreeCount: number;
  disagreeCount: number;
  dateCreated: Date;
  userId: string;
  postId: number;
}

export default function BulletCardModal(props: Props) {
    return (
        <Card className="fiveCardExpanded" sx={{ background: "#EDFA8B", boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.5)"}}>
          <form action={async () =>
            {
              "use server";
              await deletePost(props.postId );
            }
          }>
            <CardContent style={{paddingTop: "0px", paddingBottom: "0px"}}>        
             
              <Typography variant="h5" component="div" className="subjectName">
                {props.subjectName}
              </Typography>            
                <ul className="goodBullets">
                  {props.fiveGoodThings.map(thing => <li key={thing.indexOf(thing)}>{thing.toString()}</li>)}
                </ul>
            </CardContent>
            
            <CardActions className="opinionCountMain"  >
              <div style={{display: "flex", flexDirection: "row", gap: "1rem"}}>
              <Button className="closeButton" type="submit" ><DeleteIcon/></Button>
              <div> </div>
              <Link key={props.postId} href={`/post/${props.postId}/edit`}>
                <Button className="editButton"><EditIcon/></Button>
              </Link>
              </div>
              <div style={{display: "flex", flexDirection: "row", gap: "1rem"}}>
              <div className="opinionCount"><ThumbUpIcon/><p>&nbsp;{props.agreeCount}</p></div>
              <div className="opinionCount"><p>&nbsp;{props.userId}</p></div>
              <div className="opinionCount"><ThumbDownIcon/><p>&nbsp; {props.disagreeCount}</p></div>
              </div>
            </CardActions>
          </form>
        </Card>
      );
}

