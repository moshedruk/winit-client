import React from 'react'
import { useAppSelector } from '../redux/store';
interface GameCardProps {
  name: string;
  playersA: string,
  playersB: string
}


export default function GameCard({ imageA, imageB, playersA, playersB,gameId,betId }: any) {
  console.log("bets is =",betId,"for id game=",gameId)

  const { user } = useAppSelector((state) => state.user);
  return (
    <div className='card-game'>
      <div className='image-game'>
        <div>
          <img src={imageA} alt="Football Logos"
            style={{ width: "100px", height: "auto" }} />
        </div>
        
        ?מי הימר על המשחק הזה 
        <div><img src={imageB} alt="sds" style={{ width: "100px", height: "auto" }} /></div>
      </div>
      <div className='teams'>
        <button className='btn-players-game'>
          {playersA}
        </button>
        <button className='btn-players-game'>
          X
        </button>
        <button className='btn-players-game'>
          {playersB}
        </button>
      </div>
    </div>
  )
}
