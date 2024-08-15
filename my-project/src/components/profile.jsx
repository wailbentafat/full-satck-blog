import { useState,useEffect } from "react";
import axios from "axios";


function Profile() {
  
    const[profile,setprofile]=useState(null);
    
    useEffect(()=>{
     async function getprofile(){
        try{
    const response=await axios.get("http://127.0.0.1:8000/auth/profile/",
    {
    headers:
    {Authorization:`Bearer ${localStorage.getItem("token")}`}
    });
    console.log(response.data)
    setprofile(response.data);} 
    catch (error) {
        console.log(error);}
     }
    getprofile();
    },[]);
    if (!profile) return
    <div>loading...</div>
    return (
        <div>
            <p>{profile.email}</p>
        </div>
    );
}
export default Profile