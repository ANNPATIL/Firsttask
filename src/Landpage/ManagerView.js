import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper } from '@material-ui/core';
import RefreshIcon from '@mui/icons-material/Refresh';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
export default function HrView(props) {

  const [data, setData] = useState([]);

  useEffect(()=> {
    handleRefresh();
  } ,[])

  const handleRefresh=()=>{
    axios.get('http://localhost:8080/manager')
    .then((response)=>{
      console.log(response)
      setData(response.data);
    }).catch((err)=>{
      console.log(err);
    })
  }

  const handleApprove=(row,id)=>{
    console.log(row,id)
    axios.post('http://localhost:8080/manager/approve/' +row.id,)
    .then((response)=>{
      console.log(response);
      handleRefresh();
    }).catch((err)=>{
      console.log(err);
    })
  }

  const handleReject=(row,id)=>{
    console.log(row,id)
    axios.post('http://localhost:8080/manager/reject/'+row.id,)
    .then((response)=>{
      console.log(response);
      handleRefresh();
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FName</TableCell>
            <TableCell align="right">LName</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Experience</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Feedback</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((row,id) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell align="center">{row.fname}</TableCell>
              <TableCell align="center">{row.lname}</TableCell>
              <TableCell align="center">{row.age}</TableCell>
              <TableCell align="center">{row.experience}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.feedback}</TableCell>
              <TableCell align="center">
                <DoneIcon onClick={()=>handleApprove(row,id)} />{' '}{' '}
                <CloseIcon onClick={()=>handleReject(row,id)}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

