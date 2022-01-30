import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Landpage/Home';
import HRView from './Landpage/HrView';
import ManagerView from './Landpage/ManagerView';
import Candidate from './Landpage/Candidate';
import {candidates} from './contexts/dummyData';
import { CandidateContext , approveRequest, rejectRequest} from './contexts/candidateContext';
import { useState } from 'react';

export default function App () {

    const [data,setData] =  useState(candidates);
    
    function approveRequest(key, id){
      setData(data.map( ele =>  id !== ele.id ? ele : {...ele, [key] : true}));
    };
  
    function rejectRequest(key, id){
      setData(data.map( ele =>  id !== ele.id ? ele : {...ele, [key] : true}  ));
    }

    return(
        <CandidateContext.Provider value={data} >
          <BrowserRouter>
              <Routes>
                <Route path="/manager" element={<ManagerView approveRequest={approveRequest} rejectRequest={rejectRequest} />} />
                <Route path="/hr"element={<HRView approveRequest={approveRequest} rejectRequest={rejectRequest}/>}  />  
                <Route path="/candidate" element={<Candidate />} />
                <Route path="/" element={<Home />} /> 
                <Route
                  path="*"
                  element={
                    <main style={{ padding: "1rem" }}>
                      <p>There's nothing here!</p>
                    </main>
                  }
                />
              </Routes>      
          </BrowserRouter> 
        </CandidateContext.Provider>
      )
 }

