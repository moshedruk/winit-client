import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer } from 'react-toastify'
import GameCard from './components/gameCard'

function App() {
  const listgame = [
    { name: "FIFA 24", players: "Barcelona vs Real Madrid" },
    { name: "Call of Duty: Warzone", players: "Team Ghosts vs Team Shadow Company" },
    { name: "League of Legends", players: "Team Liquid vs G2 Esports" },
    { name: "Valorant", players: "Fnatic vs Sentinels" },
    { name: "Dota 2", players: "OG vs PSG.LGD" },
    { name: "Overwatch 2", players: "Seoul Dynasty vs San Francisco Shock" },
    { name: "Fortnite", players: "Solo Player A vs Solo Player B" },
    { name: "CS:GO", players: "NAVI vs Astralis" },
    { name: "Rocket League", players: "Team Vitality vs BDS" },
    { name: "PUBG", players: "Squad Alpha vs Squad Bravo" }
  ];
  
  const mmm = 'mmm'


  return (
    <> 
    <div>😍</div>
    <div className='app'>
      <div className='welcome'>
        welcome to win-it
      </div>
      <div className='main-game'>
        {listgame.map((game, index) => (
          <GameCard key={index} name={game.name}  players = {game.players}/>
        ))}
      </div>      
    </div>
    </>
  )
}

export default App
