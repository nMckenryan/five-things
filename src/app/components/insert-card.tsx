import { Card, CardContent, Typography, CardActions } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default function InsertCard() {
    return (
        <Card className="fiveCard" sx={{ minWidth: 300, minHeight: 300, display: "flex", justifyContent: "center" }}>
          <CardContent>            
            <AddCircleIcon sx={{ fontSize: 100 }}/>
          </CardContent>
        </Card>
      );
}
