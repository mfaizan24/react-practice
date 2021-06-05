import React from 'react'

function Employee(props){
    return (
        <div>
            <PersonalDetail name="james" address="1223 street sothwwalk" deptId="HR1101" deptLoc="London"></PersonalDetail>
        </div>
    )
}

const PersonalDetail=(props)=>{
    return(<div>
        <p>Name <label  style={{background:"gray",color:"white"}}>{props.name}</label></p>
        <p>Address <label  style={{background:"gray",color:"white"}}>{props.address}</label></p>
        <Department deptId={props.deptId} deptLoc={props.deptLoc}></Department>
    </div>)
}

const Department=(props)=>{
    return(
        <div>
            <p>Department ID <label  style={{background:"gray",color:"white"}}>{props.deptId}</label></p>
            <p>Dept Location <label  style={{background:"gray",color:"white"}}>{props.deptLoc}</label></p>
        </div>
    )
}

export default Employee;