import { Card, CardContent, Typography, CardActions } from "@mui/material";
import "../../styles/bullet-card.css";

interface Props {
  subjectName: string;
  postThing1: string;
  postThing2: string;
  postThing3: string;
  postThing4: string;
  postThing5: string;
  agreeCount: number;
  disagreeCount: number;
  dateCreated: Date;
  userName: string;
  postId: number;
}

export default function BulletCardModal(props: Props) {
  return (
    <Card
      className="fiveCardExpanded"
      sx={{
        background: "#EDFA8B",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.5)",
      }}
    >
      <CardContent style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <Typography variant="h6" component="div" className="subjectName">
          {props.subjectName}
        </Typography>
        <ul className="goodBullets">
          <li key={props.subjectName + props.postThing1}>{props.postThing1}</li>
          <li key={props.subjectName + props.postThing2}>{props.postThing2}</li>
          <li key={props.subjectName + props.postThing3}>{props.postThing3}</li>
          <li key={props.subjectName + props.postThing4}>{props.postThing4}</li>
          <li key={props.subjectName + props.postThing5}>{props.postThing5}</li>
        </ul>
      </CardContent>

      <CardActions className="cardFooter">
        <p>{props.userName}</p>
        <p>
          {props.dateCreated.getDate()}/{props.dateCreated.getMonth()}/
          {props.dateCreated.getFullYear()}
        </p>
      </CardActions>
    </Card>
  );
}
