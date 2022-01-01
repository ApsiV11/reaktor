import React from 'react'
import Game from './Game'

const History = ({history, choosePlayer}) => {
    if(history.length==0) {
        return null
    }

    return(
    <>
        <h2>History</h2>
        {
            history.sort((a, b) => b.t - a.t).map(game => 

                <Game
                    key={game.gameId}
                    game={game}
                    choosePlayer={choosePlayer}
                />
            )
        }
    </>
    )
}

export default History;