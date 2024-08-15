import axios from "axios"
import{useParams,useNavigate} from "react-router-dom"
import { useState,useEffect } from "react";

function Blogpost() {
    const{id}=useParams();
    const[post,setPost]=useState(null);
    const navigate=useNavigate();
    useEffect(()=>{
        axios
        .get(`http://127.0.0.1:8000/post/${id}`)
        .then((response)=>{setPost(response.data)})
        .catch((error)=>{console.log(error)});
    },[id]);
    const handleDelete=()=>{
        axios.delete(`http://127.0.0.1:8000/post/${id}/`)
        .then(()=>{navigate("/")})
        .catch((error)=>{console.log(error)});
    };
    if (!post) return <div>loading...</div>;
    return(
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={handleDelete}>delete</button>
        <button onClick={()=>navigate(`/editpost/${id}`)}>update</button>
    </div>);
    
}
export default Blogpost;
