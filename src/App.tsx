import { useEffect, useState } from 'react'

import './App.css'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
// import Login from './components/login-card'
import Welcome from './components/welcome'
import Login from './components/login'
import Register from './components/register'

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    
    navigate('/Welcome')
    
  }, []);
  return (
    <div className='app'>
      <Routes>
        <Route path='Welcome' element={<Welcome />} />
        <Route path='/Login' element={<Login />} />Register
        <Route path='Register' element={<Register />} />
        <Route path="/" element={<Navigate to={"/Welcome"} />} />
      </Routes>




    </div>

  )
}

export default App
