import {React, useState} from 'react'

// export default function Employee(){
//     const[fname, setName] = useState('james')
//     function changeHandler(e){
//         setName(e.target.value);
//     }
//     return(<div>
//         <p>
//             Name: <input type="text" value={fname} onChange={changeHandler}></input>
//         </p>
//         <p>
//             Print name: <b>{fname}</b>
//         </p>
//     </div>)
// }

export default function Employee(){
    const [employee, setEmployee] = useState({Id:0, Name:'', Loc:'', Sal:''})
    function changeInfo(e){
        setEmployee({...employee,[e.target.name]:e.target.value})
    }
    return(
        <div>
            <div>
                <label>Id: <input type="text" name="Id" value={employee.Id} onChange={changeInfo}></input></label>
                <label>Name: <input type="text" name="Name" value={employee.Name} onChange={changeInfo}></input></label>
                <label>Location: <input type="text" name="Loc" value={employee.Loc} onChange={changeInfo}></input></label>
                <label>Salary: <input type="text" name="Sal" value={employee.Sal} onChange={changeInfo}></input></label>
            </div>
            <div>
                <p>Id: <b>{employee.Id}</b></p>
                <p>Name: <b>{employee.Name}</b></p>
                <p>Location: <b>{employee.Loc}</b></p>
                <p>Salary: <b>{employee.Sal}</b></p>
            </div>
        </div>
        
    )
}