import React from 'react'
import { useAppSelector } from '../redux/store';
interface GameCardProps {
    name: string;
    playersA:string,
    playersB:string
  }
  
  
export default function GameCard({ name, playersA,playersB }:any) {
  const { user } = useAppSelector((state) => state.user);
  return (
    <div className='card-game'>
           <div className='name-game'>
            {name}
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
