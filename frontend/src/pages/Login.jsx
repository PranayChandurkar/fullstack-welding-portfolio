import React, { useState } from 'react'
import { Link,useNavigate, Navigate} from 'react-router-dom'
import axios from "axios"
import {UserDataContext} from '../context/UserContext'

const Login = () => {
  // If not DEV, redirect
  if (!import.meta.env.DEV) {
    return <Navigate to="/" />
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userData, setUserData] = useState({})
  
  const navigate = useNavigate()

  const {user , setUser } = React.useContext(UserDataContext)

  const sumbmitHandler = async (e) =>{
    e.preventDefault()
      

    const response = await axios.post(
  `${import.meta.env.VITE_BASE_URL}/users/login`,
  { email, password },
  { withCredentials: true } // 🔥 Required to send cookies
);


    if (response.status === 200) {
  const data = response.data;
  setUser(data.user);
  localStorage.setItem("token", data.token);
  navigate("/upload-product"); 
}


    setEmail("");
    setPassword("");

  }

  
  
  return (
    <div className="min-h-screen w-full bg-zinc-950 flex flex-col justify-center items-center px-6">
      
      <div className="absolute top-8 left-8">
        <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:bg-blue-600 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            </div>
        </Link>
      </div>

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 md:p-10 rounded-3xl shadow-2xl">
        <div className="text-center mb-10">
            <img
              className="h-16 w-16 rounded-full mx-auto mb-4 border border-zinc-700"
              src="https://imgs.search.brave.com/BAq5xttdV3CggAlkrBA3NWQAiz2Sd9x1XanMNqHhcWY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9Qcm9m/aWxlLVBORy1GaWxl/LnBuZw"
              alt="Logo"
            />
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-zinc-400 text-sm">Please enter your admin credentials</p>
            <div className="mt-4 inline-block bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs px-3 py-1 rounded-full font-medium">Development Mode Only</div>
        </div>

        <form onSubmit={(e)=>{sumbmitHandler(e)}}>
            <div className="mb-6">
                <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                <input 
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value);}}
                    className='w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-600'  
                    placeholder='admin@example.com'
                />
            </div>

            <div className="mb-8">
                <label className="block text-sm font-medium text-zinc-400 mb-2">Password</label>
                <input 
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value);}}
                    className='w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-600'  
                    type="password" 
                    placeholder='••••••••'
                />
            </div>

            <button 
                type="submit"
                className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/20'
            >
                Login to Dashboard
            </button>
        </form>
        
        <p className='mt-8 text-sm text-center text-zinc-500'>
            New here? <Link className='text-blue-400 hover:text-blue-300 transition-colors font-medium ml-1' to={"/register"}>Create an Account</Link>
        </p>
      </div>
    </div>
  )
}

export default Login