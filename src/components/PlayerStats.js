import React from 'react'

import utils from '../services/utils'

import Game from './Game'

const PlayerStats = ({name, games, choosePlayer}) => {

    return(
    <div className="stats">
        <h2>Player {name}</h2>
        <div>
            Win ratio: {utils.calculateWinRatio(name, games)}%
        </div>
        <div>
            Total games: {games.length}
        </div>
        <div>
            Most played hand: {utils.calculatePlayedHand(name, games)}
        </div>
        <h4>Player {name}'s games</h4>
        <div>
            {games.map(game => 
                <Game
                key={game.gameId}
                game={game}
                choosePlayer={choosePlayer}
                />
            )}
        </div>
    </div>
    )
}

export default PlayerStats;