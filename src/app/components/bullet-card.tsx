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
      <Grid item>
        <Link
          className="fiveCard"
          href={`/post/${props.postId}`}
          style={{ textDecoration: "none" }}
        >
          <Card className="fiveCard" style={{ background: "#EDFA8B" }}>
            <CardContent className="fiveCardContent">
              <h3>{props.subjectName}</h3>

              <ul>
                {props.fiveGoodThings.map((thing, index) => (
                  <li
                    key={`${props.subjectName}-${thing}-${index}`}
                    style={{ lineHeight: 1.5 }}
                  >
                    {thing.toString()}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardActions className="fiveCardActions">
              <p>{props.userName}</p>
              <p>&nbsp;</p>
              <p>
                {props.dateCreated.getDate()}/{props.dateCreated.getMonth()}/
                {props.dateCreated.getFullYear()}
              </p>
            </CardActions>
          </Card>
        </Link>
      </Grid>
    </Suspense>
  );
}
