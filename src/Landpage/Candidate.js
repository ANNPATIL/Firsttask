import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Candidate from './components/Candidate';

import React, { useEffect, useState, Component } from "react";

class Candidate extends Component {

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));
  
  const Form = ({ handleClose }) => {
    const classes = useStyles();
   
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [age, setAge] = useState('');
    const [experience, setExperience] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log(fname, lname, age, experience);
      handleClose();
    };
  
    return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="Fname"
          variant="filled"
          required
          value={fname}
          onChange={e => setFname(e.target.value)}
        />
        <TextField
          label="Lname"
          variant="filled"
          required
          value={lname}
          onChange={e => setLname(e.target.value)}
        />
        <TextField
          label="Age"
          variant="filled"
          type="age"
          required
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <TextField
          label="Experience"
          variant="filled"
          type="experience"
          required
          value={experience}
          onChange={e => setExperience(e.target.value)}
        />
        <div>
          
          <Button type="submit" variant="contained" color="primary">
           submit
          </Button>
        </div>
      </form>
    );
  
  };
    

  // render(){
  //     return (<div> Candidate </div>)
  // }

}





 export default Candidate;