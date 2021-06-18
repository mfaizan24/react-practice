import React from 'react'
import {Link, NavLink, Switch, Route, Redirect} from 'react-router-dom'
const authentication = {
    isLoggedIn:false, 
    onAuthentication(){
        this.isLoggedIn = true;
    },
    getLoginStatus(){
        return this.isLoggedIn;
    }
}
export default function ProtectedApp(){
    return(<div>
        <h2>Pages...</h2>
        <Link to="/">Login</Link> &nbsp;&nbsp;
        <NavLink to="/home"></NavLink> &nbsp;&nbsp;
        <NavLink to="/editprofile"></NavLink>
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <SecureRoute path="/home" component={Home}></SecureRoute>
            <SecureRoute path="/editprofile" component={EditProfile}></SecureRoute>
        </Switch>
    </div>)
}
function SecureRoute(props){
    return(
        <Route path={props.path} render={data=>authentication.getLoginStatus() ? 
        (<props.component {...data}></props.component>) :
        (<Redirect to={{pathname:'/'}}></Redirect>)}></Route>
    )
}
function Login(props){
    const updateLogin=()=>{
        authentication.onAuthentication();
        //props.history.push('/home')
        console.log(authentication);
    }
    const goToEdit=()=>{
        props.history.push('/editprofile')
    }
    return(<div>
        <h1>Login..</h1>
        <button onClick={updateLogin}>Login..</button>
        <button onClick={goToEdit}>Edit Profile</button>
    </div>)
}

function Home(){
    return(<div>
        <h1>Home..</h1>
    </div>)
}
function EditProfile(){
    return(<div>
        <h1>Edit Profile..</h1>
    </div>)
}