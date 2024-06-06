import { useState } from "react";
import BlogNavbar from "../Components/BlogNavbar";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginPage() {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[validate,setValidate] = useState(true);
    const navigate = useNavigate();
   
    
    
    function handleSubmit(e){
      if(validate){
        axios.post('http://localhost:8000/api/userlogin',{username,password}).then((res)=>{
            toast.success("success");
            navigate("/");
            localStorage.setItem("user",res.data.username)
        }).catch((e)=>{
            toast.error("Invalid Credentials")
        })
      }

        e.preventDefault()
        if(username ==''){
            setValidate(false);
        }
    
        if(password==''){
            setValidate(false)
        }
    }

    return (
        <>
        <BlogNavbar/>
        <ToastContainer/>
        <div className="grid justify-items-center mt-12">
        <div className="w-[90%] md:w-[30%] border border-slate-300 rounded p-4">
                <h2 className="font-bold text-3xl text-center text-stone-600 p-4">User Login</h2>
                <form onSubmit={handleSubmit}>
                    <label className={`${validate?"text-stone-800":"text-red-600 transition-all" }`}>Username:</label><br />
                    
                    <input type="text" onChange={(e)=>{setUsername(e.target.value)}} className={`w-[99%] h-8 ${validate?"border border-stone-700":"border border-red-600 transition-all" }`}/><br />
                    <label className={`${validate?"text-stone-800":"text-red-600 transition-all" }`}>Password:</label><br />
                    
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className={`w-[99%] h-8 ${validate?"border border-stone-700":"border border-red-600 transition-all" }`}/><br />
                    Not a user?<Link className="text-blue-800" to={`/userReg`}> Sign in</Link>
                    <input type="submit" className="bg-orange-400 p-2 w-[99%] mt-4 rounded text-white" value="Login" /><br />
                    
                </form>
            </div>
        </div>
           
        </>
    );
}

export default LoginPage;