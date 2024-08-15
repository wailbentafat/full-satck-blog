import  {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Header  from "./components/header";
import  Homepage  from "./pages/homepage";
import  Postpage  from "./pages/post";
import  Bloglist  from "./components/bloglist";
import  Createpost  from "./components/createpost";
import  Editpost  from "./components/editpost";
import Blogpost from "./components/blogpost";
import { AuthProvider } from "./context/Authcontext";
import  Signin  from "./pages/signin";
import  Signup  from "./pages/signup page";
import  Profile  from "./pages/profile";
console.log("hello")
function App() {
  return(
    <AuthProvider>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/post/:id" element={<Postpage/>}/>
        <Route path="/blog" element={<Bloglist/>}/>
        <Route path="/createpost" element={<Createpost/>}/>
        <Route path="/editpost/:id" element={<Editpost/>}/>
        <Route path="/blog/:id" element={<Blogpost/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
    </AuthProvider>
  )};
  export default App