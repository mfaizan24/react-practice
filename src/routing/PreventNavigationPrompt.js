import React,{useState} from 'react'
import {Link, NavLink, Switch, Route, Prompt} from 'react-router-dom'

export default function PreventNavApp(){
    return(
        <div>
        <Link to="/">Login</Link>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/editprofile">Edit profile</NavLink>
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/editprofile" component={EditProfile}></Route>
        </Switch>
        </div>
    )
}
function Login(){
    return(<div>
        <h1>Login...</h1>
    </div>)
}
function Home(){
    return(<div>
        <h1>Home...</h1>
    </div>)
}
function EditProfile(){
    const [employee, setEmployee] = useState({name:"james", age:22, address:"222 street north walk"})
    const [isEdit, setIsEdit] = useState(false)
    function onEmployeeChange(e){
        setIsEdit(true)
        setEmployee({...employee,[e.target.name]:e.target.value})
    }
    function editEmployee(){
        setIsEdit(false);
    }
    return(<div>
        <h1>Edit profile...</h1>
        <Prompt when={isEdit} message="Are you sure you want to navigate away!!"></Prompt>
        <p>Name <input type="text" name="name" value={employee.name} onChange={onEmployeeChange}></input></p>
        <p>Age <input type="text" name="age" value={employee.age} onChange={onEmployeeChange}></input></p>
        <p>Address <input type="text" name="address" value={employee.address} onChange={onEmployeeChange}></input></p>
        <p><button onClick={editEmployee}>Save</button></p>
    </div>)
}