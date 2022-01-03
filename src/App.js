import './App.css';
import React, { useState, useEffect } from 'react'

import gameService from './services/games'

//import History from './components/History'
import LiveGames from './components/LiveGames'
import PlayerStats from './components/PlayerStats'

const App = () => {
  const [player, setPlayer] = useState(null)
  const [history, setHistory] = useState([])

  //useEffect loads the player game history every time the player changes.
  useEffect(() => {
    gameService.getHistory(player).then(games => {
      setHistory(games)
    })
  }, [player])

  return (
    <>
      {/*<Footer text="Rock-Paper-Scissors Games" />*/}
      <div className="divs">
        <LiveGames choosePlayer={(playerName) => setPlayer(playerName)}/>
        {player ? <PlayerStats name={player} games={history} choosePlayer={(playerName) => setPlayer(playerName)}/> : null}
      </div>
    </>
  )
}

export default App;
