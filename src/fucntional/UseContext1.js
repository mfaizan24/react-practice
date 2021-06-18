import React, {useState, useEffect, useContext} from 'react'
const driverContext = React.createContext();
export default function TheBase(){
    const [drivers, setDriver]=useState({DriverId: 101, DriverName: 'James', DriverLoc: 'Central London W3'})
    return(<div>
        <h2>This is The base...</h2>
        <driverContext.Provider value={drivers}>
            <DriverInfo></DriverInfo>
        </driverContext.Provider>
    </div>)
}

const DriverInfo=()=>{
    const ctx = useContext(driverContext)
    return (
        <div>
            <h2>Driver information..</h2>
            <p>
                Id: {ctx.DriverId}
            </p>
            <p>
                Name: {ctx.DriverName}
            </p>            
            <DriverLocation></DriverLocation>
        </div>
    )
}

function DriverLocation(){
    const ctx = useContext(driverContext)
    const [diffLoc, setLoc]=useState({loc:"htis is "})
    const locs = ["Twickenham T11","East Ham E2","Southhall UB2","Croydon CR1"]
    let locId = 0;
    useEffect(() => {
        setInterval(() => {
            setLoc({...diffLoc,loc:locs[locId]})
            console.log(locs[locId], diffLoc.loc, locId)
            locId++
            if(locId == 4)
                locId = 0;
        }, 2000);
        
    }, [])
    return(
        <div>
        <h2>Driver Location</h2>
        <p>
            Current Location: {ctx.DriverLoc}
        </p>
    </div>)
}

