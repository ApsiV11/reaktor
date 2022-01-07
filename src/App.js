import './App.css';
import React, { useState, useEffect } from 'react'

import gameService from './services/games'

import Header from './components/Header'
import LiveGames from './components/LiveGames'
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

  //useEffect loads the player game history every time the player changes.
  useEffect(() => {
    gameService.getHistory(player).then(games => {
      setHistory(games)
    })
  }, [player])

  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <Header text="Rock-Paper-Scissors Games" />
      <div className="divs">
        <LiveGames choosePlayer={(playerName) => setPlayer(playerName)}/>
        {player ? <PlayerStats name={player} games={history} choosePlayer={(playerName) => setPlayer(playerName)}/> : null}
      </div>
    </ThemeProvider>
  )
}

export default App;
