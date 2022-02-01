import React, { Fragment } from 'react';
import "../App.css";

function ListItem(props){
    return (
        <div className="list_box">
            <div>
                <p> <b> Name : </b>  {props.listItemData.fname + ' '  + props.listItemData.lname}  </p>
                <p> <b> Age : </b> {props.listItemData.age} </p>
                <p> <b> Total Work Ex (in years) : </b> {props.listItemData.exp} </p>
                {/* <a href={props.listItemData.link_to_resume} download="filename">  Link to Resume  </a> */}
            </div>
            {props.showBtn ? (
                <div className="approval_box"> 
                    <button onClick={ ev => {
                            ev.preventDefault(); 
                            props.onApprove( `is_${props.listType}_approved`, props.listItemData.id )} 
                        } style={{color : "green"}}> Approve </button>
                    <button onClick={ev => {
                            ev.preventDefault(); 
                            props.onReject(`is_${props.listType}_reject`, props.listItemData.id)} 
                        } style={{color:"red"}} >  Reject </button>
                </div>)
                : (<div style={{color: props.approvalStatus === 'approved' ? 'green' : 'red' }}> { props.approvalStatus.toUpperCase() } </div>)
            }
        </div>
    )
}


export default function List(props){
    console.log(props.data, "Kem CHo");
    return (
        <Fragment>
            {props.data.length > 0 ? 
             props.data.map( (ele) => (
                <ListItem  
                    listType={props.listType}
                    key={ele.id}
                    showBtn={props.showBtnFn(ele)} 
                    listItemData={ele} 
                    approvalStatus={props.getApprovalStatus(ele)}
                    onApprove={props.onApprove}
                    onReject={props.onReject}
                    />)  )
            : <p> Sorry We have no shortlisted candidates yet </p>  }
        </Fragment>
    )

}