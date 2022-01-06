import React, { useState, useEffect } from 'react'
import useWebSocket from 'react-use-websocket'

import Game from './Game'

//Component responsible for showing the active games
const LiveGames = ({choosePlayer}) => {
    const [games, setGames] = useState([])

    const {sendMessage, lastMessage} = useWebSocket(`ws://${window.location.hostname}/rps/live`)

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
        <div className="games">
            <div className="gameContainer">
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
            </div>
            <div className="gameContainer">
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
            </div>
        </div>
    )
}

export default LiveGames