import React from 'react'

export default class ReactProps extends React.Component{
    render(){
        return <div>
            <Employee name="James william" location="Hyderabad" deptname="HR" deptloc="Secbad"></Employee>
        </div>
    }
}

class Employee extends React.Component{
    render(){
        return <div>
            <p> Name <input type="text" defaultValue={this.props.name}></input></p>
            <p> Location <input type="text" defaultValue={this.props.location}></input></p>
            <Department deptname={this.props.deptname} deptloc={this.props.deptloc}/>
        </div>
    }
}

class Department extends React.Component{
    render(){
        return <div>
            <p>Department <input type="text" defaultValue={this.props.deptname}></input></p>
            <p>Dept Location <input type="text" defaultValue={this.props.deptloc}></input></p>
        </div>
    }
}

