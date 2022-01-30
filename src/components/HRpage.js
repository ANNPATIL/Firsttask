import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import images from '../images/HR.jpg';
import "../App.css";



export default function MediaCard(props) {
  return (
    <Card sx={{ display: "flex",
    flexDirection: "column",
    padding: "10px", justifyContent: 'center', p: 1, m: 1,borderRadius: 1, margin: "10px" }}>
      <CardMedia src={images}
      title="HR"
        component="img" 
        sx={{maxWidth:"200px", maxHeight:"250px", minWidth:"200px", minHeight:"250px" }}
      />
      
      <Button variant="contained" onClick={
        ev => {ev.preventDefault(); props.navigateTo("hr") }}>
      HR Login
    </Button>
    </Card>
  );
}