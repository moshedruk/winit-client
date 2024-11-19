import React from 'react'
import Login from './login'
import { ImProfile } from 'react-icons/im'
import Traveling from './traveling'

export default function Welcome() {
    return (
        <>
            <div className='welcome'>
                welcome to win-it
            </div>
            <div className='Connect-or-free'>
            <Login />
            <Traveling />               
            </div>
            {/* <div><ImProfile className="icon-large" onClick={()=>alert("gggggg")} /></div> */}
        </>
    )
}
