import { Card, CardContent, CardActions } from "@mui/material";
import "../../styles/bullet-card.css";

interface Props {
  subjectName: string;
  fiveGoodThings: string[];
  userId: string;
  userName: string;
  dateCreated: Date;
}

export default function BulletCard(props: Props) {
  return (
    <Card
      className="fiveCard"
      sx={{
        background: "#EDFA8B",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.5)",
      }}
    >
      <CardContent
        style={{ marginTop: "5px", paddingTop: "2px", paddingBottom: "0px" }}
      >
        <h3>{props.subjectName}</h3>

        <ul className="goodBullets">
          {props.fiveGoodThings.map((thing, index) => (
            <li key={`${props.subjectName}-${thing}-${index}`}>
              <p>{thing.toString()}</p>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardActions
        style={{
          paddingTop: "1px",
          paddingBottom: "0px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p>{props.userName}</p>
        <p>&nbsp;</p>
        <p>
          {props.dateCreated.getDate()}/{props.dateCreated.getMonth()}/
          {props.dateCreated.getFullYear()}
        </p>
      </CardActions>
    </Card>
  );
}
