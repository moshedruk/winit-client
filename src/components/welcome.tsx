import React from 'react'
import Login_card from './login-card'
import Traveling_card from './traveling-card'
import Listgame from './listgame'

export default function Welcome() {
    console.log("lllllllllllllllllll")
    return (
        <>
            <div className='welcome'>
                welcome to win-it
            </div>
            
                {/* <Login_card />
                <Traveling_card /> */}
                <Listgame/>
            
            {/* <div><ImProfile className="icon-large" onClick={()=>alert("gggggg")} /></div> */}
        </>
    )
}
