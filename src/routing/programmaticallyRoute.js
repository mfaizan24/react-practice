import React,{useState, useEffect} from 'react'
import {Link, NavLink, Route, Switch} from 'react-router-dom'

export default function App(){
    return(<div>
        <Link to="/">Login</Link>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/editprofile">Edit Profile</NavLink>
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/editprofile" component={EditProfile}></Route>
        </Switch>
    </div>)
}

function Login(props){
    const [login, setLogin] = useState({username:'', password:'', loggedIn:false})
    function changeLogin(e){
        setLogin({...login,[e.target.name]:e.target.value})
    }
    function loginUser(){
        setLogin({...login, loggedIn:true})
        if(login.loggedIn){
            props.history.push('/home')
        }
    }
    return(<div>
        <p>Username: <input type="text" value={login.username} onChange={changeLogin} name="username"></input></p>
        <p>password: <input type="text" value={login.password} onChange={changeLogin} name="password"></input></p>
        <p><button onClick={loginUser}>Login</button></p>
    </div>)
}

function Home(props){
    return(<div>
        <h1>Home..</h1>
        <button onClick={p=>{props.history.push('/editprofile')}}>Edit Profile</button>
        <button onClick={p=>{props.history.goBack('/login');props.history.index=0;}}>Logout</button>
    </div>)
}
function EditProfile(props){
    return(<div>
        <h1>Edit Profile..</h1>
        <button onClick={p=>{props.history.goBack('/home')}}>Go Back</button>
    </div>)
}