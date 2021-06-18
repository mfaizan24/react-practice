import React, {useState, useEffect} from 'react'
const axios = require('axios');
export default function App(){
    return(<div>
        <Albums></Albums>
        <Posts/>
    </div>)
}

const Albums=()=>{
    const albums = useList("https://jsonplaceholder.typicode.com/albums");
    // if(!albums.length) return (<span>loading...</span>);
    return (<div>
        <h2>Albums.....</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>User ID</th>
                </tr>
            </thead>
            <tbody>
                {
                    albums.loading == false ? albums.data.map((album)=>{
                    return <tr key={album.id}>
                        <td>{album.id}</td>
                        <td>{album.title}</td>
                        <td>{album.userId}</td>
                    </tr>
                    }) : "loading.."
                }
            </tbody>
        </table>
    </div>)
}


const Posts=()=>{
    const posts = useList("https://jsonplaceholder.typicode.com/posts");
    // if(!posts.length) return (<span>loading...</span>);
    return (<div>
        <h2>Posts.....</h2>
        <table>
            <thead>
                <tr>
                <th>User ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                   posts.loading == false ? posts.data.map((p)=>{
                        return <tr key={p.id}>
                            <td>{p.userId}</td>
                            <td>{p.title}</td>
                            <td>{p.body}</td>
                        </tr>
                    }) : "Loading.."
                }
            </tbody>
        </table>
    </div>)
}


function useList(url){
    const [response, setResponse]=useState({
        loading:true, 
        data:[],
        status:"success"
    });
    useEffect(async ()=>{
        try
        {            
            const {data} = await axios.get(url);
            setResponse({
                ...response,
                loading:false,
                data
            })
        } catch(error){
            console.log('error..', error);
            setResponse({...response, loading:false, data:[], status:"failed"})
        }
    },[]);

    return response;
}