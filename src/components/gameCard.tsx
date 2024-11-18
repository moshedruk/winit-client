import React from 'react'
interface GameCardProps {
    name: string;
    players: string
  }
  
  
export default function GameCard({ name, players }:GameCardProps) {
  return (
    <div className='card-game'>
           <div className='name-game'>
            {name}
           </div>
           <div className='players-game'>
            {players} players
           </div>
    </div>
  )
}
