import React from 'react'
import { useAppSelector } from '../redux/store';
import { IBet } from '../interface/Gambling';
interface GameCardProps {
  imageA: string
  imageB: string,
  playersA: string,
  playersB: string,
  gameId: string,
  betId: IBet[],
}


export default function GameCard({ imageA, imageB, playersA, playersB,gameId,betId }: GameCardProps) {
  const  {user}  = useAppSelector((state) => state.user);
  const newBet = (e:any) => {
    const value = e.target.value;
    // dispatch(fetchBet(gameId, value, betId[0]._id));
    console.log("value:",value,"game:",gameId, "userId:",user._doc._id) 
  }

  return (
    <div className='card-game'>
      {!betId[0] ? (<p>לא קיימת הימור</p>) :(
        <>
      <div className='image-game'>
        <div>
          <img src={imageA} alt="Football Logos"
            style={{ width: "100px", height: "auto" }} />
        </div>
        ?מי הימר על המשחק הזה 
        <div><img src={imageB} alt="sds" style={{ width: "100px", height: "auto" }} /></div>
      </div>
      <div className='teams'>
        <button className='btn-players-game' value={betId[1]._id} onClick={(e)=>newBet(e)}>
          {playersA} <p className='p-v'>{betId[1].value}</p>
        </button>
        <button className='btn-players-game' value={betId[0]._id} onClick={(e)=>newBet(e)}>
          X  <p className='p-v'>{betId[0].value}</p>
        </button>
        <button className='btn-players-game' value={betId[2]._id} onClick={(e)=>newBet(e)}>
          {playersB} <p className='p-v'>{betId[2].value}</p>
        </button>
      </div>
      </>
     )}
    </div>
  )
}
