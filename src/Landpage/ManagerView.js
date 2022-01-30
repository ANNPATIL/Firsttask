import React from 'react';
import { CandidateContext } from '../contexts/candidateContext';
import List from '../components/List';

export default function ManagerView (props) {

    function showBtnFn(ele){
        return !(ele.is_manager_approved || ele.is_manager_reject);
    } 

    function getApprovalStatus(ele){
        let approvalStatus = '';
        if(ele.is_manager_approved){
            approvalStatus = 'approved';
        }
        if(ele.is_manager_reject){
            approvalStatus = 'rejected';
        }
        return approvalStatus;
    }

    return (
        <CandidateContext.Consumer>
           { (data) => (
                <List 
                data={data.filter( ele => ele.is_hr_approved )} 
                onApprove={props.approveRequest} 
                onReject={props.rejectRequest} 
                getApprovalStatus={getApprovalStatus} 
                showBtnFn={showBtnFn}
                listType="manager"
            />
            ) }
            
        </CandidateContext.Consumer>
    ) 
 

}


