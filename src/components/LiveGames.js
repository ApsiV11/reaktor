import React, { useState, useEffect } from 'react'
import useWebSocket, {ReadyState} from 'react-use-websocket'

import Game from './Game'

const LiveGames = ({choosePlayer}) => {
    const [games, setGames] = useState([])

    const {sendMessage, lastMessage, readyState} = useWebSocket("ws://bad-api-assignment.reaktor.com/rps/live")

    useEffect(() => {
        if(lastMessage !== null) {
            const gameEvent = JSON.parse(JSON.parse(lastMessage.data))

            if(gameEvent.type==="GAME_BEGIN") {
                setGames([...games, gameEvent])
            }

            else {
                let newGames = [...games]
                newGames = newGames.map((game) => game.gameId==gameEvent.gameId ? gameEvent : game)
                setGames(newGames)

                /*setTimeout(() => {
                    let newGames = [...games]
                    newGames = newGames.filter((game) => game.gameId != gameEvent.gameId)
                    setGames(newGames)
                }, 3000)*/
            }
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