import React from 'react'
import ReduxEmployee from './reduxExample1'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const employeeData = {
    salary:15000
};
const reducer=(state=employeeData, action)=>{
    switch(action.type){
        case "INCREMENT":
            return {salary:state.salary + 1000}
        case "DECREMENT":
            return {salary:state.salary - 1000}
        default:
            return state;
    }
}
const store = createStore(reducer);

export default function ReduxApp(){
    <Provider store={store}>
        <ReduxEmployee></ReduxEmployee>
    </Provider>
}