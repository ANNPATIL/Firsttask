import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import images from '../images/Candidate.jpg';
import "../App.css";
import Candidate from '../Landpage/Candidate';



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
      <Button variant="contained" onClick={ ev => {ev.preventDefault(); props.navigateTo("Candidate") } }>
      Candidate 
    </Button>
    </Card>
  );
  
}