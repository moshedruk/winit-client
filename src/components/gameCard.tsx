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
  console.log("bets is =",betId[0],"for id game=",gameId)

  const { user } = useAppSelector((state) => state.user);
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
      </>
     )}
    </div>
  )
}
