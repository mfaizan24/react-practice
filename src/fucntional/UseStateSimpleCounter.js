import React, {useState, useEffect} from 'react'

export default function Employee(){
    const [totalEmployee, setTotalEmployee] = useState(0);
    useEffect(() => {
        var handler = setInterval(()=>{
            console.log('application running...');
            setTotalEmployee(totalEmployee + 1)
        }, 1000);
        return () => {
            clearInterval(handler);
        }
    },[totalEmployee]);

    return(<div>
        <h1>This is employee todos....</h1>
        <span style={{fontSize:"20px"}}>
            Total Employees: {totalEmployee}
        </span>
    </div>)
}