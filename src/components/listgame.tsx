import { useEffect } from 'react'
import GameCard from './gameCard'
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchGetAllGame } from '../redux/slices/game';

export default function Listgame() {
  console.log("hhhh")

  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("33333333333333")
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
          <GameCard key={index} name={game._id}  playersA = {game.ended} playersB = {game.scoreA}/>
        ))}
      </div>   
    </>
  )
}
