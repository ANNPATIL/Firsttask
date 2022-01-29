import './App.css';
import Candidate from './Landpage/Candidate'
import HR from './Landpage/HRpage'
import Manager from './Landpage/Managerpage'
import { Grid } from '@material-ui/core';
import { palette } from '@mui/system';
import Box from '@mui/material/Box';

 export default function App() {
 return(
   <Grid container>
    <div>
     <Grid item xs={15} sm={6} md={3}>
     <Candidate/>
     </Grid>
     </div>
     <div>
     <Grid item xs={12} sm={6} md={3}>
     <HR/>
     </Grid>
     </div>
     <div>
     <Grid item xs={12} sm={6} md={3}>
     <Manager/>
     </Grid>
     </div>
     <div className="application">
          <style>{'body { background-color: #80ced6; }'}</style>
        </div>
    
   </Grid>
  
   )
 
 }
