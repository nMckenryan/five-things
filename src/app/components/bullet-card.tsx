import { Card, CardContent, Typography, CardActions } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import '../../styles/bullet-card.css';

interface Props {
  subjectName: string;
  fiveGoodThings: string[];
  agreeCount: number;
  disagreeCount: number;
  userName: string;
}

export default function BulletCard(props: Props) {
    return (
        <Card className="fiveCard" sx={{ background: "#EDFA8B", boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.5)"}}>
          <CardContent>            
            <Typography variant="h5" component="div" className="subjectName">
              {props.subjectName}
            </Typography>            
              <ul className="goodBullets">
                {props.fiveGoodThings.map(thing => <li key={thing.indexOf(thing)}>{thing.toString()}</li>)}
              </ul>

          </CardContent>
          <CardActions className="opinionCountMain"  >
            <div className="opinionCount"><ThumbUpIcon/><p>&nbsp;{props.agreeCount}</p></div>
            <div className="opinionCount"><p>&nbsp;{props.userName}</p></div>
            <div className="opinionCount"><ThumbDownIcon/><p>&nbsp; {props.disagreeCount}</p></div>
          </CardActions>
        </Card>
      );
}
