import {React, useState, useEffect} from 'react'
export default function Album(){
    const [aalbum, setAalbum]=useState({userId:1, title:'', body:''})
    const [albums, setAlbums]=useState([])
    const [newAlbumAdded, setNewAlbumAdded] = useState(0)
    const [searchText, setSearchText] = useState('')
    useEffect(()=>{
        if(searchText) {
            let arr = []
            fetch("https://jsonplaceholder.typicode.com/albums/" + searchText)
             .then(p=>p.json())
             .then(res=>{
                    console.log(res)
                    arr.push(res);
                })
             .then(p=>{
                setAlbums(arr)
            })
        } else {
            fetch("https://jsonplaceholder.typicode.com/albums").then(p=>p.json()).then(res=>{
                setAlbums(res)
            })
        }
        console.log('rendered....')
    },[searchText, newAlbumAdded])

    function changeSearch(e){
        setSearchText(e.target.value)
    }

    function addAlbum(){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: aalbum.title,
                body: aalbum.body,
                userId: aalbum.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setAalbum({userId:1, title:'', body:''})
                setNewAlbumAdded(newAlbumAdded + 1)
            });
    }
    return(
        <div>
            <div style={{width:'200px'}}>
                <p>User ID: {aalbum.userId}</p>
                <p>Title: <input type="text" name="title" value={aalbum.title} onChange={(e)=>{setAalbum({...aalbum,[e.target.name]:e.target.value})}}></input></p>
                <p>Body: <input type="text" name="body" value={aalbum.body} onChange={(e)=>{setAalbum({...aalbum,[e.target.name]:e.target.value})}}></input></p>
                <p>
                    <button onClick={addAlbum}>Add Album</button>
                </p>
            </div>
            <div style={{width:'200px'}}>
                Search: <input type="text" value={searchText} onChange={changeSearch}></input>
            </div>
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
    </div>
    )
}