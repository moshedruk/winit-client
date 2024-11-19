import React from 'react'
import GameCard from './gameCard'

export default function Listgame() {
    const listgame = [
        { name: "FIFA 24", playersA: "Barcelona" ,playersB: "Real Madrid" },
        { name: "Call of Duty: Warzone", playersA: "Team Ghosts " ,playersB:" Team Shadow Company" },
        { name: "League of Legends", playersA: "Team Liquid ",playersB:" G2 Esports" },
        { name: "Valorant", playersA: "Fnatic  ",playersB:"Sentinels" },
        { name: "Dota 2", playersA: "OG",playersB:"PSG.LGD" },
        { name: "Overwatch 2", playersA: "Seoul Dnasty ",playersB:"San Francisco Shock" },
        { name: "Fortnite", playersA: "Solo Player A",playersB:"Solo Player B" },
        { name: "CS:GO", playersA: "NAVI", playersB:"Astralis" },
        { name: "Rocket League", playersA: "Team Vitality",playersB:"BDS" },
        
      ];
  return (
    <div>
      <div className='main-game'>
        {listgame.map((game, index) => (
          <GameCard key={index} name={game.name}  playersA = {game.playersA} playersB = {game.playersB}/>
        ))}
      </div>   
    </div>
  )
}
