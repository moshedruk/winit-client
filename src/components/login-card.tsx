import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login_card() {
  const navigate = useNavigate()
  const handleClickRegister = () => {
    navigate('/Register')
  }
  const handleClickLogin = () => {
    navigate('/Login')
  }
  return (
    <div className='card-login'>
      <h1>Login</h1>
      <p>I want to see the betting survey for the games</p>
      <button className='btn-login' onClick={handleClickLogin}>Login</button>
      <button className='btn-login' onClick={handleClickRegister}>register</button>
    </div>
  )
}
