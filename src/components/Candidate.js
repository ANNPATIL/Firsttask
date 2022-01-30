import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import images from '../images/Candidate.jpg';
import Grid from '@material-ui/core/Grid';
import "../App.css";

export default function MediaCard(props) {
  return (
    <Card sx={{     
      display: "flex", flexDirection: "column",padding: "10px", 
     alignItems:'center', justify:'center', 
      borderRadius: 2, margin: "10px"}}>
      <CardMedia src={images}
       title="candidate"
        component="img"
        sx={{maxWidth:"200px", maxHeight:"250px", minWidth:"200px", minHeight:"250px"}}
      />
      <Button variant="contained"  onClick={ ev => {ev.preventDefault(); props.navigateTo("candidate") } }>
      Candidate Login
    </Button>
    </Card>
  );
  
}