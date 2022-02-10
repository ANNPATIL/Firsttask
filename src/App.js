import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Landpage/Home';
import HRView from './Landpage/HrView';
import ManagerView from './Landpage/ManagerView';
import Candidate from './Landpage/Candidate';


export default function App () {

    return(
        
          <BrowserRouter>
              <Routes>
                <Route path="/manager" element={<ManagerView/>} />
                <Route path="/hr"element={<HRView/> } /> 
                <Route path="/candidate" element={<Candidate />} />
                <Route path="/" element={<Home />} /> 
                <Route
                  path=""
                  element={
                    <main style={{ padding: "1rem" }}>
                      <div>
                      <p>Candidate Form</p>
                     </div>  
                    </main>
                  }
                />
              </Routes>      
          </BrowserRouter> 
       
      )
 }

