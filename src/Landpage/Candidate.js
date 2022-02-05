// import React, { useState } from 'react';
import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

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

  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [experience, setExperience] = useState('');
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:8080/candidate", {
      "fname" : fName.fName,
      "lname" : lName.lName,
      "age" : age.age,
      "experience" : experience.experience
      
}
).then((response) => {
  console.log(response);

})
  .catch((error) => {
    console.log(error);
  })

    console.log(fName, lName, experience, age,);
    // handleClose();
    
  };



  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="FName"
        variant="filled"
        required
        value={fName}
        onChange={e => setFName(e.target.value)}
      />
      <TextField
        label="LName"
        variant="filled"
        required
        value={lName}
        onChange={e => setLName(e.target.value)}
      />
      <TextField
        label="Experience"
        variant="filled"
        type="experience"
        required
        value={experience}
        onChange={e => setExperience(e.target.value)}
      />
      <TextField
        label="Age"
        variant="filled"
        type="age"
        required
        value={age}
        onChange={e => setAge(e.target.value)}
      />
      <div>

        <Button type="submit" variant="contained" color="primary">
          submit
        </Button>
      </div>
    </form>
  );
};

export default Form;

