import React from 'react'
import ReactDOM from 'react-dom'
export default class Posts extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts:[],
            showModal:false
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(p=>p.json())
        .then(p => {
            this.setState({posts:p})
        })
    }
    editPost=()=>{
        this.setState({showModal:!this.state.showModal ? true : false});
        console.log(this.state.showModal)
    }
    render(){
        return(<div>
            <table>
                <thead>
                    <tr>
                        <th>user ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.posts.map(p=>{
                        return <tr key={p.id}>
                            <td>{p.userId}</td>
                            <td>{p.title}</td>
                            <td>{p.body}</td>
                            <td>
                                <button onClick={this.editPost}>Edit</button>
                                <GenericModal open={this.state.showModal} close={this.editPost}>
                                    <PostModal post={p}></PostModal>
                                </GenericModal>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>)
    }
}

class PostModal extends React.Component{
    constructor(props){
        super(props);
    }
    changeHandler=e=>{
        console.log(e)
    }
    render(){
        return <div>
            <p>
                ID: {this.props.post.id}
            </p>
            <p>
                User ID: {this.props.post.userId}
            </p>
            <p>
                Title <input type="text" onChange={this.changeHandler} value={this.props.post.title}></input>
            </p>
            
                Body <input type="text" onChange={this.changeHandler} value={this.props.post.body}></input>
            
            <p>
                <button type="submit">Save</button>
            </p>
        </div>
    }
}

class GenericModal extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return this.props.open?ReactDOM.createPortal(<div className="modal">
                <button onClick={this.props.close}>X</button>
                {this.props.children}
            </div>, document.body):null
    }
}