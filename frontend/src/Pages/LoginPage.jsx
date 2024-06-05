import { useState } from "react";
import BlogNavbar from "../Components/BlogNavbar";
function LoginPage() {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[validate,setValidate] = useState(true);
    
    function handleSubmit(e){
        e.preventDefault()
        if(username ==''){
            setValidate(false);
        }else{
            console.log(username)
        }
    
        if(password==''){
            setValidate(false)
        }else{
            console.log(password)
        }
    }

    return (
        <>
        <BlogNavbar/>
        <div className="grid justify-items-center mt-12">
        <div className="w-[90%] md:w-[30%] border border-slate-300 rounded p-4">
                <h2 className="font-bold text-3xl text-center text-stone-600 p-4">User Login</h2>
                <form onSubmit={handleSubmit}>
                    <label className={`${validate?"text-stone-800":"text-red-600 transition-all" }`}>Username:</label><br />
                    
                    <input type="text" className={`w-[99%] h-8 ${validate?"border border-stone-700":"border border-red-600 transition-all" }`}/><br />
                    <label className={`${validate?"text-stone-800":"text-red-600 transition-all" }`}>Password:</label><br />
                    
                    <input type="password" className={`w-[99%] h-8 ${validate?"border border-stone-700":"border border-red-600 transition-all" }`}/><br />
                    <input type="submit" className="bg-orange-400 p-2 w-[99%] mt-4 rounded text-white" value="Login" />
                    <input type="submit" className="bg-orange-200 hover:bg-orange-400 hover:transition-all p-2 w-[99%] mt-4 rounded text-white" value="Register" />
                </form>
            </div>
        </div>
           
        </>
    );
}

export default LoginPage;