import Authcontext from "../context/Authcontext";
import  react ,{ useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Signinform() {
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[username,setusername]=useState("");
    const {login}=useContext(Authcontext);
    const navigate=useNavigate();
    const  handlesubmit= async(event)=>{
        console.log("rrr")
      event.preventDefault();
      console.log("submit")
      try {
         const response=  await axios.post("http://127.0.0.1:8000/auth/register/",{
          email,
          password,
          username:email,
        });
        console.log(response.data.access)
        console.log(response.data.refresh)
        console.log("response");
        console.log(response);
        console.log("response.data");
        console.log(response.data);
        if (response.data && response.data.access && response.data.refresh) {
            login(response.data.access, response.data.refresh);
            navigate("/");
        } else {
            console.error("Unexpected response format:", response.data);
        }
        navigate("/");
      } catch (error) {
        console.log(error);
    };
    };
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <input
                type='email'
                placeholder='email'
                value={email}
                onChange={(e)=>{setemail(e.target.value)}}
                />
                <input
                type='password'
                placeholder='password'
                value={password}
                onChange={(e)=>{setpassword(e.target.value)}}
                />
                <button>login</button>
            </form>
        </div>
    );
    }
