import React from 'react'
export default class ReactStates extends React.Component{
    constructor(props){
        super(props);
        this.state={
            num:0
        }
    }
    incrementState=e=>{
        this.setState({num: this.state.num+1});
    }
    decrementState=e=>{
        this.setState({num: this.state.num-1});
    }
    render(){
        return <div>
            <button onClick={this.decrementState}>-</button>
            <input type="text" value={this.state.num}></input>
            <button onClick={this.incrementState}>+</button>
        </div>
    }
}

