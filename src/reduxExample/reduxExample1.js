import React from 'react'
import {connect} from 'react-redux'

class ReduxEmployee extends React.Component{
    constructor(props){
        super(props);
    }
    incrementSalary=e=>{
        this.props.dispatch({type:'INCREMENT'})
    };
    decrementSalary=e=>{
        this.props.dispatch({type:'DECREMENT'})
    };
    render(){
    return (<div>
        <h2>Current Salary {this.props.salary}</h2>
        <button onClick={this.incrementSalary}>Increment Salary</button>
        <button onClick={this.decrementSalary}>Decrement Salary</button>
    </div>);
    }
}

function mapToStateProps(state){
    return {
        salary:state.salary
    };
}
export default connect(mapToStateProps)(ReduxEmployee);


// export default function ReduxEmployee(){
//     const [salary, setSalary] = useState(15000)

//     const incrementSalary=()=>{
//         setSalary(salary + 1000)
//     }
//     const decrementSalary=()=>{
//         setSalary(salary - 1000);
//     }
//     return (<div>
//         <h2>Current Salary {salary}</h2>
//         <button onClick={incrementSalary}>Increment Salary</button>
//         <button onClick={decrementSalary}>Decrement Salary</button>
//     </div>)
// }