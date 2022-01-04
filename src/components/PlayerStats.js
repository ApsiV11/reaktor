import React, {useState} from 'react'

import utils from '../services/utils'

import Game from './Game'

//Component for showting the player info we want to show
const PlayerStats = ({name, games, choosePlayer}) => {
    const [page, setPage] = useState(0);

    const handleClick = (direction) => {
        page+direction>0 ? setPage(page+direction) : setPage(0)
    }

    return(
    <div className="stats">
        <h2>Player {name}</h2>
        <div>
            Win ratio: {games ? utils.calculateWinRatio(name, games) : ""}%
        </div>
        <div>
            Total games: {games ? games.length : ""}
        </div>
        <div>
            Most played hand: {games ? utils.calculatePlayedHand(name, games) : ""}
        </div>
        <h4>Player {name}'s games</h4>
        <div>
            {games ? games.sort((a, b) => b.t-a.t).filter((game, i) => i>=5*page && i<=5*page+4).map(game => 
                <Game
                key={game.gameId}
                game={game}
                choosePlayer={choosePlayer}
                />
            ) : ""}
        </div>
        <button onClick={() => handleClick(-1)}>&#60;</button>Page {page+1}<button onClick={() => handleClick(1)}>&#62;</button>
    </div>
    )
}

export default PlayerStats;