import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import images from '../images/Manager.jpeg';


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 1000, height:300, }}>
      <CardMedia src={images}
      title="candidate"
        component="img"
        
      />
      
      
      <Button variant="contained" Manager Login>
      Manager Login
    </Button>
    </Card>
  );
}