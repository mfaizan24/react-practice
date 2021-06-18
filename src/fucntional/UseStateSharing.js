import {React, useState} from 'react'
export default function Employee(){
    const [employee, setEmployee] = useState({Id:0, Name:'', Loc:'', Sal:''})
    function changeInfo(e){
        setEmployee({...employee,[e.target.name]:e.target.value})
    }
    return(
        <div>
            <h2>Employee Details...</h2>
            <div>
                <label>Id: <input type="text" name="Id" value={employee.Id} onChange={changeInfo}></input></label>
                <label>Name: <input type="text" name="Name" value={employee.Name} onChange={changeInfo}></input></label>
                <label>Location: <input type="text" name="Loc" value={employee.Loc} onChange={changeInfo}></input></label>
                <label>Salary: <input type="text" name="Sal" value={employee.Sal} onChange={changeInfo}></input></label>
            </div>
            <div>
                <p>Id: <b>{employee.Id}</b></p>
                <p>Name: <b>{employee.Name}</b></p>
                <p>Location: <b>{employee.Loc}</b></p>
                <p>
                    <Salary salary={employee.Sal} changeSalary={changeInfo}></Salary>
                </p>
            </div>
        </div>
        
    )
}

const Salary =({changeSalary, salary})=>{
    return(<div>
    <h2>Salary details..</h2>
    <div>
        <label>Salary: <input type="text" name="Sal" value={salary} onChange={changeSalary}></input></label>
    </div>
    </div>)
}

