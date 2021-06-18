import {React, useState, useEffect} from 'react'
export default function Albums(){
    const [albums, setAlbums] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/albums").then(p=>p.json()).then(res=>{
            setAlbums(res)
        })
    },[]) //,[] :: empty array added to run useEffect only once.
    return (<div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>User ID</th>
                </tr>
            </thead>
            <tbody>
                {albums.map((album)=>{
                    return <tr key={album.id}>
                        <td>{album.id}</td>
                        <td>{album.title}</td>
                        <td>{album.userId}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>)
}