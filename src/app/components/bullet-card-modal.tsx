import { Card, CardContent, CardActions } from "@mui/material";
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
  dateUpdated: Date;
  dateCreated: Date;
  userName: string;
  postId: number;
}

export default function BulletCardModal(props: Props) {
  const dateCreated = new Intl.DateTimeFormat("en-AU", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(props.dateUpdated);

  const lastUpdated = new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    month: "numeric",
  }).format(props.dateUpdated);

  return (
    <Card
      className="fiveCardExpanded"
      sx={{
        background: "#EDFA8B",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.5)",
      }}
    >
      <CardContent style={{ paddingTop: "0px", paddingBottom: "0px" }}>
        <h3>{props.subjectName}</h3>

        <ul className="goodBullets">
          <li key={props.subjectName + props.postThing1}>{props.postThing1}</li>
          <li key={props.subjectName + props.postThing2}>{props.postThing2}</li>
          <li key={props.subjectName + props.postThing3}>{props.postThing3}</li>
          <li key={props.subjectName + props.postThing4}>{props.postThing4}</li>
          <li key={props.subjectName + props.postThing5}>{props.postThing5}</li>
        </ul>
      </CardContent>

      <CardActions
        className="cardFooter"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <p className="cardItems">{props.userName}</p>

        <p className="cardItems">Created: {dateCreated}</p>

        <p className="cardItems">
          Updated:
          {lastUpdated}
        </p>
      </CardActions>
    </Card>
  );
}
