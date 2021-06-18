import React, {useState, useEffect, useContext} from 'react'
const driverContext = React.createContext();
export default function App(){
    const [employee, setEmployee]=useState({Name:'james', DriverLoc:'London W3'})
    return(<div>
        <driverContext.Provider value={{data:employee, updateLocation:setEmployee}}>
            <Employee></Employee>
        </driverContext.Provider>
    </div>)
}

const Employee=()=>{
    const ctx = useContext(driverContext)
    return(<div>
        <h2>Employee...</h2>
        <p>
            Name: {ctx.data.Name}
        </p>
        <DriverLoc></DriverLoc>
    </div>)
}

const DriverLoc=()=>{
    const ctx = useContext(driverContext)
    const [diffLoc, setLoc]=useState({loc:''})
    const locs = ["Twickenham T11","East Ham E2","Southhall UB2","Croydon CR1"]
    let locId = 0;
    useEffect(() => {
        setInterval(() => {
            ctx.updateLocation({...ctx.data, DriverLoc:locs[locId]})
            setLoc({...diffLoc,loc:locs[locId]})
            locId++
            if(locId == 4)
                locId = 0;
        }, 2000);
        
    }, [])
    return (<div>
        <h2>Driver Current Location: {ctx.data.DriverLoc}</h2>
        <h2>Driver new Location: {diffLoc.loc}</h2>
    </div>)
}