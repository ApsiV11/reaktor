import React, { useState, useEffect } from 'react'
import useWebSocket from 'react-use-websocket'

import Game from './Game'

import List from '@mui/material/List'

//Component responsible for showing the active games
const LiveGames = ({choosePlayer}) => {
    const [games, setGames] = useState([])

    const {sendMessage, lastMessage} = useWebSocket(`ws://${window.location.hostname}:80/rps/live`)

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

    return(
        <div className='games'>
            <div className='gameContainer'>
                <List sx={{mx:"8%", width: "300px"}}>
                    <h2>Active games</h2>
                    {
                        games.filter((game) => game.type==="GAME_BEGIN").map(game => 

                            <Game
                                key={game.gameId}
                                game={game}
                                choosePlayer={choosePlayer}
                            />
                        )
                    }
                </List>
            </div>
            <div className='gameContainer'>
                <List sx={{mx:"8%", width: "300px"}}>
                    <h2>Recently completed games</h2>
                    {
                        games.filter((game) => game.type==="GAME_RESULT").map(game =>
                            <Game
                                key={game.gameId}
                                game={game}
                                choosePlayer={choosePlayer}
                            />
                        )
                    }
                </List>
            </div>
        </div>
    )
}

export default LiveGames