import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchLogin } from '../redux/slices/user';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const dispatch = useAppDispatch();
     const  {user}  = useAppSelector((state) => state.user);
    const navigate = useNavigate()
    const handleClickLogin = async () => {
      const resultAction = await dispatch(fetchLogin({ username, password }));   
      
        const user = resultAction.payload; 
        console.log(user)
        if (user && user._doc._id) {
          navigate('/Welcome');
        } else {
          alert('Username or password is incorrect');
        }
      
    };
    
  
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

  return (
    <div className='login-user'>
      <input className='inp-login-user' type='text' placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <input className='inp-login-user' type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button className='btn-user-login'  onClick={() => {handleClickLogin()}}>Login</button>      
    </div>
  )
}
