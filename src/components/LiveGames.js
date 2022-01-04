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
            <h2>Active Games</h2>
            {
                games.sort((a, b) => b.t - a.t).sort((a,b) => {
                    if(a.type===b.type) {
                        return 0;
                    }
                    else if (a.type==="GAME_BEGIN" && b.type==="GAME_RESULT") {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                }).map(game => 

                    <Game
                        key={game.gameId}
                        game={game}
                        choosePlayer={choosePlayer}
                    />
                )
            }
        </div>
    )
}

export default LiveGames