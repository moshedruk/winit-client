import { socket } from '../main'
import Listgame from './listgame'
import { useNavigate } from 'react-router-dom'

export default function Welcome() {
    socket.on("all-bets",(data)=>{
        console.log(data)
    })

    const navigate = useNavigate()
    const handleClickLogin = () => {
        navigate('/Login')
      }
      const handleClickRegister = () => {
        navigate('/Register')
      }
    
    return (
        <>  <div className='bar'>
            <div className='sign'>
            <button className='btn-sign-in' onClick={handleClickLogin}>sign-in</button>
            <button className='btn-sign-up' onClick={handleClickRegister}>sign-up</button>
            </div>
            <div className='welcome'>
                welcome to win-it
            </div>
            {/* <FaRegUser /> */}
        </div>
            
                {/* <Login_card />
                <Traveling_card /> */}
                <Listgame/>
            
            {/* <div><ImProfile className="icon-large" onClick={()=>alert("gggggg")} /></div> */}
        </>
    )
}
