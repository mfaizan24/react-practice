import React from 'react'
export default class Employee extends React.Component{
    constructor(props){
        super(props);
        this.state={
            salary:0
        }
    }
    updateSalaryCallback=(sal)=>{
        this.setState({salary:sal});
    }
    render(){
        return <div>

        </div>
    }
}

class Salary extends React.Component{
    render(){
        return 
    }
}