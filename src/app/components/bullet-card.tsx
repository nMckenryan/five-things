import {
  Card,
  CardContent,
  CardActions,
  Link,
  Skeleton,
  Grid,
} from "@mui/material";
import "../../styles/bullet-card.css";
import { Suspense } from "react";

interface Props {
  subjectName: string;
  fiveGoodThings: string[];
  userId: string;
  userName: string;
  dateCreated: Date;
  postId: number;
}

export default function BulletCard(props: Props) {
  return (
    <Suspense
      key={props.postId}
      fallback={<Skeleton variant="rectangular" width={210} height={60} />}
    >
      <Link className="fiveCard" href={`/post/${props.postId}`}>
        <Card>
          <CardContent className="fiveCardContent">
            <h3>{props.subjectName}</h3>

            <ul className="goodBullets">
              {props.fiveGoodThings.map((thing, index) => (
                <li key={`${props.subjectName}-${thing}-${index}`}>
                  <p>{thing.toString()}</p>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardActions className="cardActions">
            <p>{props.userName}</p>
            <p>&nbsp;</p>
            <p>
              {props.dateCreated.getDate()}/{props.dateCreated.getMonth()}/
              {props.dateCreated.getFullYear()}
            </p>
          </CardActions>
        </Card>
      </Link>
    </Suspense>
  );
}
