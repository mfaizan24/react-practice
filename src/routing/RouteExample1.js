import React from 'react'
import { NavLink, Link, Switch, Route } from 'react-router-dom'
import Employee from './employee'
import Department from './department'
import Project from './project'
import NotFound from './NotFound'
import EditEmployee from './editEmployee'
export default function Routing1()
{
    return(<div>
        <h1>Routing Example 1...</h1>
        <ul>
            <li><Link to="/">Employee</Link></li>
            <li><NavLink to="/department" activeClassName="lnkActive">Department</NavLink></li>
            <li><NavLink to="/project" activeClassName="lnkActive">Project</NavLink></li>
        </ul>
        <Switch>
            <Route exact path="/" component={Employee}></Route>
            <Route path="/employee/:emp_id" component={EditEmployee}></Route>
            <Route path="/department" component={Department}></Route>
            <Route path="/project" component={Project}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </div>)
}
