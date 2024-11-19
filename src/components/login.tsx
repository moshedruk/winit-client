import React, { useState } from 'react'

export default function Login() {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
  return (
    <div className='login-user'>
      <input className='inp-login-user' type='text' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input className='inp-login-user' type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button className='btn-user-login' onClick={()=>console.log(username)}>Login</button>      
    </div>
  )
}
