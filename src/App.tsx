import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer } from 'react-toastify'
import { ImProfile } from "react-icons/im";
import GameCard from './components/gameCard'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/login'
import Welcome from './components/welcome'

function App() {

  return (
    <div className='app'>
    <Routes>
      <Route path='login' element ={<Welcome/>} />             
      <Route path="/" element={<Navigate to={"/login"} />} />
    </Routes>   
    
    
      
         
    </div>
    
  )
}

export default App
