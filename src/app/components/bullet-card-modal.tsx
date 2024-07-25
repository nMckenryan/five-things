import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import "../../styles/bullet-card.css";
import { deletePost } from "~/server/queries";

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
      <form
        action={async () => {
          "use server";
          await deletePost(props.postId);
        }}
      >
        <CardContent style={{ paddingTop: "0px", paddingBottom: "0px" }}>
          <Typography variant="h5" component="div" className="subjectName">
            {props.subjectName}
          </Typography>
          <ul className="goodBullets">
            <li key={props.postThing1}>{props.postThing1}</li>
            <li key={props.postThing2}>{props.postThing2}</li>
            <li key={props.postThing3}>{props.postThing3}</li>
            <li key={props.postThing4}>{props.postThing4}</li>
            <li key={props.postThing5}>{props.postThing5}</li>
          </ul>
        </CardContent>

        <CardActions className="opinionCountMain">
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <div className="opinionCount">
              <ThumbUpIcon />
              <p>&nbsp;{props.agreeCount}</p>
            </div>
            <div className="opinionCount">
              <p>&nbsp;{props.userName}</p>
            </div>
            <div className="opinionCount">
              <ThumbDownIcon />
              <p>&nbsp; {props.disagreeCount}</p>
            </div>
          </div>
        </CardActions>
      </form>
    </Card>
  );
}
