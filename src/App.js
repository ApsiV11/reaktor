import './App.css';
import React, { useState, useEffect } from 'react'

import gameService from './services/games'

import History from './components/History'
import LiveGames from './components/LiveGames'
import PlayerStats from './components/PlayerStats'

const App = () => {
  const [player, setPlayer] = useState(null)
  const [history, setHistory] = useState([])
  const [cursor, setCursor] = useState(null)

  useEffect(() => {
    gameService.getHistory(cursor).then(games => {
      setHistory([...history, ...games.data.data])
      setCursor(games.data.cursor)
    })
  }, [cursor])

  const handleLoad = (cursor) => {
    gameService.getHistory(cursor).then(games => {
      setHistory(history.concat(games.data.data))
      setCursor(games.data.cursor)
    })
  }

  return (
    <>
      {/*<Footer text="Rock-Paper-Scissors Games" />*/}
      <div className="divs">
        <LiveGames choosePlayer={(playerName) => setPlayer(playerName)}/>
        {player ? <PlayerStats name={player} games={history.filter((game) => game.playerA.name===player || game.playerB.name===player)} choosePlayer={(playerName) => setPlayer(playerName)}/> : null} {/*<History history={history} choosePlayer={(playerId) => setPlayer(playerId)}/>*/}
      </div>
    </>
  )
}

export default App;
