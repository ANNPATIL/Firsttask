// import React from 'react';
import { CandidateContext } from '../contexts/candidateContext';
import List from '../components/List';
import axios from 'axios';
import React, { useState, Fragment } from 'react';
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper } from '@material-ui/core';


export default function HrView (props) {

    function createData(Fname, Lname, Age, Experience, Status) {
        return {Fname, Lname, Age, Experience, Status};
      }

      const [fName, setFName] = useState('');
      const [lName, setLName] = useState('');
      const [experience, setExperience] = useState('');
      const [age, setAge] = useState('');
      const [status, setStatus] = useState('');
      axios.post("http://localhost:8080/candidate/HR", {
        "fname" : fName.fName,
      "lname" : lName.lName,
      "age" : age.age,
      "experience" : experience.experience,
      "status" : status.status 

}
).then((response) => {
  console.log(response);

})
  .catch((error) => {
    console.log(error);
  })
      const rows = [
        createData(),
        createData(),
        createData(),
        createData(),
        createData(),
      ];
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Fname</TableCell>
              <TableCell align="right">Lname</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Experience</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}


{/* <td>
      <div class="dropout">
        <button class="more">
         <span></span>
         <span></span>
         <span></span>
        </button>
        <ul>
          <li>
            option 1
          </li>
          <li>
            option 2
          </li>
          <li>
            option 3
          </li>
        </ul>
      </div>
    </td> */}
          </TableBody>
        </Table>


        
      </TableContainer>
    );
  }

