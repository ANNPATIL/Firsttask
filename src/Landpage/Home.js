import  React ,{Component} from 'react';
import '../App.css';
import {useNavigate} from 'react-router-dom';
import Candidate from '../components/Candidate'
import HR from '../components/HRpage'
import Manager from '../components/Managerpage'
import { Grid } from '@material-ui/core';

export default function Home(){

 const navigate = useNavigate();

  function navigateTo(pageName) {
    navigate(`/${pageName}`)
}

    return(
      <Grid container>
       <div className="centered_div" >
            <Candidate navigateTo={navigateTo}/>
            <HR navigateTo={navigateTo}/>
            <Manager navigateTo={navigateTo}/>
       </div>
        <div className="application">
             <style>{'body { background-color: #80ced6; }'}</style>
           </div>
       
      </Grid>
     
      )
  } 
