import React from 'react'
import Login_card from './login-card'
import Traveling_card from './traveling-card'

export default function Welcome() {
    return (
        <>
            <div className='welcome'>
                welcome to win-it
            </div>
            <div className='Connect-or-free'>
                <Login_card />
                <Traveling_card />
            </div>
            {/* <div><ImProfile className="icon-large" onClick={()=>alert("gggggg")} /></div> */}
        </>
    )
}
