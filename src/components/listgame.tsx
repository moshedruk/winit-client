import { useEffect } from 'react'
import GameCard from './gameCard'
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchGetAllGame } from '../redux/slices/game';

export default function Listgame() {
  

  const dispatch = useAppDispatch();
  useEffect(() => {
    
    dispatch(fetchGetAllGame())
  }, []);
  const games = useAppSelector((state) => state.games.games);
  if (!games) {
    console.log(games)
    return <h1>Loading...</h1>
  } 
   
  return (
    <>
      <div className='main-game'>
        {games.map((game, index) => (
          <GameCard key={index} imageA={game.teamA.icon} imageB={game.teamB.icon}  playersA = {game.teamA.teamName} playersB = {game.teamB.teamName} gameId={game._id!} betId={game.bets}/>
        ))}
      </div>   
    </>
  )
}
