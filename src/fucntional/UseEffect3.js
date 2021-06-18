import {React, useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

export default function Albums(){
    const [albums, setAlbums] = useState([])
    let inter = 0
    useEffect(()=>{
        console.log('useEffect...',inter++)
        var handle = setInterval(() => {
            getAlbums();
            console.log('5 sec ticked')
        }, (5000));

        return ()=>{
            clearInterval(handle);
        }
    },[])
    function getAlbums(){
        fetch("https://jsonplaceholder.typicode.com/albums").then(p=>p.json()).then(res=>{
                setAlbums(res)
        })
    }

    function NavigateToDept(){
        ReactDOM.render(<Dept></Dept>, document.getElementById("root"))
    }

    return (
        <div>
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
        <div>
            <button onClick={NavigateToDept}>Navigate To Dept</button>
        </div>
        </div>
    )
}

const Dept=()=>{
    function navAlbum(){
        ReactDOM.render(<Albums></Albums>, document.getElementById("root"))
    }
    return (
        <div>
            <h2>This is department...</h2>
        <p>
            <button onCilck={navAlbum}>Back to Albums</button>
        </p>
    </div>)
}