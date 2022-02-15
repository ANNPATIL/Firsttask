import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper, TextField} from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

export default function HrView(props) {

  const [data, setData] = useState([]);

  useEffect(()=> {
      console.log("trying to load hr candidate on page load")
        handleRefresh();
  } ,[])

  const handleRefresh = () => {
    axios.get('http://localhost:8080/hr')
      .then((response) => {
        console.log(response)
        setData(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }

  const setFeedback = (row, feedback) => {
      row.feedback = feedback
  }

  const handleApprove = (row, id) => {
    console.log(id)
    axios.post('http://localhost:8080/hr/approve/'+row.id, row.feedback)
      .then((response) => {
        console.log(response);
        handleRefresh();
      }).catch((err) => {
        console.log(err)
      })
  }

  const handleReject = (row, id) => {
    console.log(id)
    axios.post('http://localhost:8080/hr/reject/' +row.id,)
      .then((response) => {
        console.log(response);
        handleRefresh();
      }).catch((err) => {
        console.log(err);
      })
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">FName</TableCell>
            <TableCell align="center">LName</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Experience</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Feedback</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, id) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.fname}</TableCell>
              <TableCell align="center">{row.lname}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.experience}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">
                  <TextField
                      autoFocus
                      margin="dense"
                      label="Feedback"
                      type="text"
                      variant="standard"
                      name="feedback"
                      value={row.feedback}
                      onChange={e => setFeedback(row, e.target.value)}
                  />
              </TableCell>
              <TableCell align="center">
                <DoneIcon onClick={() => handleApprove(row, id)} />{' '}{' '}
                <CloseIcon onClick={() => handleReject(row, id)} />
              </TableCell>
            </TableRow>
          ))}
       </TableBody>
      </Table>
    </TableContainer>
  );
}

