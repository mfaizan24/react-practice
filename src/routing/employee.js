import React, {useState, useEffect} from 'react'

export default function Employee() {
    //const [totalEmployee, setTotalEmployee] = useState(0);
    const [employee, setEmployee]=useState([]);
    const [update, setUpdate] = useState(null);
    
    useEffect(()=>{
        if(update === null || update === true){
            fetch("https://localhost:44314/api/employee").then(p=>p.json()).then(r=>{
                console.log(r)
                setEmployee(r)
            });
            setUpdate(false);
        }
        
    },[employee, update]);

    return(<div>
        <h1>This is employee todos....</h1>
        <button onClick={refresh}>Refresh</button>
        <table>
            <thead>
                <tr>
                    <th>Emp ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>DOB</th>
                    <th>Dept Id</th>
                    <th>Active</th>
                    <th>Action(s)</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map(e=>{
                        return <tr key={e.emp_id}>
                            <td>{e.emp_id}</td>
                            <td>{e.emp_name}</td>
                            <td>{e.age}</td>
                            <td>{formatDate(e.dob)}</td>
                            <td>{e.dept_id}</td>
                            <td>{e.is_active}</td>
                            <td><a href={'/employee/' + e.emp_id}>Edit</a></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>)

    function formatDate(d){
        return d ? d.split('T')[0] : ''
    }
    function refresh(){
        console.log(update)
        setUpdate(true);
    }
}