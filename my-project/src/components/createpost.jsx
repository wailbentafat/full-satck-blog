import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Createpost() {
    const [title, setTitle] = useState(""); // Correct destructuring
    const [body, setBody] = useState("");   // Correct destructuring
    const navigate = useNavigate();

    const handlePost = (event) => {
        event.preventDefault(); // Prevent default form submission
        axios.post("http://127.0.0.1:8000/post/", 
            {
                title,
                body,
            }, 
            { headers: { 'Content-Type': 'application/json' } } // Explicitly set Content-Type
        )
        .then(() => {
            navigate("/"); // Redirect after successful post
        })
        .catch((error) => {
            console.log('Error:', error.response ? error.response.data : error.message); // Handle errors
        });
    };
    
    return (
        <div>
            <form onSubmit={handlePost}> {/* Correct onSubmit */}
                <input
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} // Correct setter function
                />
                <textarea
                    placeholder="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)} // Correct setter function
                />
                <button type="submit">Create</button> {/* Added type="submit" */}
            </form>
        </div>
    );
}

export default Createpost;
