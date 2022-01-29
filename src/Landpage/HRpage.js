import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import images from '../images/HR.jpg';


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 1000, height:300, justifyContent: 'center', p: 1, m: 1,borderRadius: 1 }}>
      <CardMedia src={images}
      title="HR"
        component="img"
        
      />
      
      <Button variant="contained" HR Login>
      HR Login
    </Button>
    </Card>
  );
}