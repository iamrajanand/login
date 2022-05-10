import React, { useRef } from 'react'
import './login.css'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const emailRef=useRef();
    const passwordRef=useRef();
    const handleSubmit=async (e)=>{
       
        e.preventDefault();
        try{
            
            const res=await axios.post("/api/login",{
               
                email:emailRef.current.value,
                password:passwordRef.current.value,
            });
          console.log(res.data.message);
          if(res.data.message=="Login successful"){
             console.log("in login");
             window.open('/L1',"_self")
          }
        }catch(err){
            
            console.log(err);
        }
    }
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form onSubmit={handleSubmit} className="loginForm">
            <label>Email</label>
            <input type="text" placeholder='Email' ref={emailRef} />
            <label>Password</label>
            <input type="password" placeholder='Password' ref={passwordRef}/>
            <button className='loginButton' type="submit" >Login</button>
        </form>
    </div>
  )
}
