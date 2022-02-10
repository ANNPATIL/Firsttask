import { CandidateContext } from '../contexts/candidateContext';
import List from '../components/List';
import axios from 'axios';
import React, { useState, Fragment, useEffect } from 'react';
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper } from '@material-ui/core';
import RefreshIcon from '@mui/icons-material/Refresh';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
export default function HrView(props) {

  function createData(Fname, Lname, Age, Experience) {
    return { Fname, Lname, Age, Experience };
  }
  
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [experience, setExperience] = useState('');
  const [age, setAge] = useState('');
  
  const [data, setData] = useState([]);
  axios.get("http://localhost:8080/hr", ).then((response) => {
    console.log(response);

  })
    .catch((error) => {
      console.log(error);
    })

  const handleRefresh = () => {
    axios.get('http://localhost:8080/hr')
      .then((response) => {
        console.log(response)
        setData(response.data);
      }).catch((err) => {
        console.log(err);
      })
  }
  const handleApprove = (row, id) => {
    console.log(id)
    let newArray = data;
    newArray[row].status = 'Approved'
    console.log(newArray)
    setData(newArray);
    
    axios.post('http://localhost:8080/hr/approve/'+id,)
      .then((response) => {
        console.log('new item added',response);
      }).catch((err) => {
        console.log(err)
      })
  }
  const handleReject = (row, id) => {
    console.log(id)
    let newArray = data;
    newArray[row].status = 'Reject'
    console.log(newArray)
    setData(newArray);
    axios.post('http://localhost:8080/hr/reject/' +id,)
      .then((response) => {
        console.log(response);
        handleRefresh();
      }).catch((err) => {
        console.log(err);
      })
  }
  return (
    <TableContainer component={Paper}>
      <RefreshIcon onClick={handleRefresh} />
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Fname</TableCell>
            <TableCell align="center">Lname</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Experience</TableCell>
            <TableCell align="center">Status</TableCell>
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
              <TableCell hidden={row.status !== 'New'} align="center">
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

