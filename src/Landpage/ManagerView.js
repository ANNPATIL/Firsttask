import React from 'react';
import { CandidateContext } from '../contexts/candidateContext';
import List from '../components/List';
import axios from 'axios';
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper } from '@material-ui/core';


export default function ManagerView (props) {

    function createData(Fname, Lname, Age, Experience,) {
        return {Fname, Lname, Age, Experience,};
      }
      axios.post("http://localhost:8080/candidate/MANAGER", {

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
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

