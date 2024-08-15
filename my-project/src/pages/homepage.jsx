import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BlogList from '../components/bloglist';
function Homepage() {
    const[posts,setPosts]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/post/")
        .then((Response)=>{setPosts(Response.data)})
        .catch((Error)=>{console.log(Error)});
    },[]);
    return(
        <div>
        <BlogList posts={posts}/>    
        </div>
    );
    }

export default Homepage