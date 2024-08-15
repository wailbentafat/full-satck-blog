import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
  function Editpost() {
    const[title,settitle]=useState("");
    const { id } = useParams();
    const[body,setbody]=useState("");
    const navigate=useNavigate();
    const handlpost=(event)=>(
        event.preventDefault(),
        axios.put(`http://127.0.0.1:8000/post/${id}/`,{title,body})
        .then(()=>{navigate("/")})
        .catch((error)=>{console.log(error)}));
        return(
            <div>
                <form onSubmit={handlpost}>
                    <input
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e)=>{settitle(e.target.value)}}
                    />
                    <textarea
                   
                    placeholder="body"
                    value={body}
                    onChange={(e)=>{setbody(e.target.value)}}
                    />
                    <button>update</button>
                    </form>
            </div>
        );
    }
    export default Editpost;