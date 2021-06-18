import React,{useState, useEffect} from 'react'
import {Link, NavLink, Route, Switch } from 'react-router-dom'
function EmployeeAddresses(props){
    return(<div>
        <h1>Employee Addresses</h1>
    </div>)
}
function EmployeeDepartment(props){
    return (<div>
        <h1>Employee Department</h1>
    </div>)
}
function EmployeePersonalInfo(props){
    const [employee, setEmployee] = useState({})
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        if(!update){
            fetch("https://localhost:44314/api/employee/" + props.match.params.emp_id).then(p=>p.json()).then(r=>{
                setUpdate(true);
                setEmployee(r);
                console.log(r)
            })
        }
    }, [employee, update])

    function changeEmployee(e){
        setEmployee({...employee,[e.target.name]:e.target.value})
    }
    function updateEmployee() {
        fetch("https://localhost:44314/api/employee/" + props.match.params.emp_id, {
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(employee)
        }).then(p=>p.json()).then(r=>{
            if(r === 1) {
                setUpdate(false);
            }
        })
    }

    return (<div>
        <p>
            Id: <input type="text" value={employee.emp_id} name="emp_id" readOnly></input>
        </p>
        <p>
            Name: <input type="text" value={employee.emp_name} name="emp_name" onChange={changeEmployee}></input>
        </p>
        <p>
            Age: <input type="text" value={employee.age} name="age" onChange={changeEmployee}></input>
        </p>
        <p>
            DOB: <input type="text" value={employee.dob} name="dob" onChange={changeEmployee}></input>
        </p>
        <p>
            Dept Id: <input type="text" value={employee.dept_id} name="dept_id" onChange={changeEmployee}></input>
        </p>
        <p>
            Active: <input type="text" value={employee.is_active} name="is_active" onChange={changeEmployee}></input>
        </p>
        <p>
            <button onClick={updateEmployee}>Update</button>
        </p>
        
    </div>)
}
export default function EditEmployee(props){
    return(<div>
        <Link to={"/employee/" + props.match.params.emp_id}>Personal</Link> &nbsp;&nbsp;
        <Link to={"/employee/" + props.match.params.emp_id + "/department"}>Department</Link> &nbsp;&nbsp;
        <Link to={"/employee/" + props.match.params.emp_id + "/addresses"}>Addresses</Link>
        <Switch>
            <Route exact path="/employee/:emp_id" component={EmployeePersonalInfo}></Route>
            {/* this is manually specifying the url, we can do dynamically as well see the next below example */}
            {/* manual urls  */}
            {/* <Route path="/employee/:emp_id/department" component={EmployeeDepartment}></Route>
            <Route path="/employee/:emp_id/addresses" component={EmployeeAddresses}></Route> */}

            {/* dynamic urls  */}
            <Route path={props.match.url + "/department"} component={EmployeeDepartment}></Route>
            <Route path={props.match.url + "/addresses"} component={EmployeeAddresses}></Route>
        </Switch>
    </div>)
}