import React from 'react';
import { CandidateContext } from '../contexts/candidateContext';
import List from '../components/List';

export default function HRView (props) {

    function showBtnFn(ele){
        return !(ele.is_hr_approved || ele.is_hr_reject);
    } 

    function getApprovalStatus(ele){
        let approvalStatus = '';
        if(ele.is_hr_approved){
            approvalStatus = 'approved';
        }
        if(ele.is_hr_reject){
            approvalStatus = 'rejected';
        }
        return approvalStatus;
    }


    return (
        <CandidateContext.Consumer>
            { (data) => (
            <List 
                data={data}
                onApprove={props.approveRequest} 
                onReject={props.rejectRequest}  
                getApprovalStatus={getApprovalStatus} 
                showBtnFn={showBtnFn}
                listType="hr"
        />)
        }
        </CandidateContext.Consumer>
    ) 
 

}


