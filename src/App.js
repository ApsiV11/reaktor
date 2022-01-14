import './App.css';
import React, { useState, useEffect } from 'react'
import useWebSocket from 'react-use-websocket'

import gameService from './services/games'

import Header from './components/Header'
import Games from './components/Games'
import PlayerStats from './components/PlayerStats'

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

const App = () => {
  const [player, setPlayer] = useState(null)
  const [history, setHistory] = useState([])
  const [games, setGames] = useState([])

  const {sendMessage, lastMessage} = useWebSocket(`ws://${window.location.hostname}/rps/live`)

  //useEffect loads the player game history every time the player changes.
  useEffect(() => {
    setHistory([])
    gameService.getHistory(player).then(games => {
      setHistory(games)
    })
  }, [player])

  //Just to inform the backend to start sending data
  useEffect(() => {
    sendMessage("ready")
  }, [sendMessage])

  useEffect(() => {
      if(lastMessage !== null) {
          const gameEvents = JSON.parse(lastMessage.data)

          setGames(gameEvents.data)
      }
  }, [lastMessage])

  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <Header text="Rock-Paper-Scissors Games" />
      <div className="divs">
        <Games type="GAME_BEGIN" games={games} choosePlayer={(playerName) => setPlayer(playerName)}/>
        <Games type="GAME_RESULT" games={games} choosePlayer={(playerName) => setPlayer(playerName)}/>
        {player ? <PlayerStats name={player} games={history} choosePlayer={(playerName) => setPlayer(playerName)}/> : null}
      </div>
    </ThemeProvider>
  )
}

export default App;
