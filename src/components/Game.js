import React from 'react'

const Game = ({game, choosePlayer}) => {

    return(
    <div key={game.gameId}>
        <h3>Game {game.gameId}</h3>
        <h5><strong>Result: {game.winner ? `${game.winner} wins` : "Draw"} </strong></h5>
        <div>
            <h5>Player A</h5>
            <div>
                Name: 
                <button onClick={() => choosePlayer(game.playerA.name)}>
                   {game.playerA.name}
                </button>
            </div>
            <div>
                Played: {game.playerA.played}
            </div>
        </div>
        <div>
            <h5>Player B</h5>
            <div>
                Name: 
                <button onClick={() => choosePlayer(game.playerB.name)}>
                   {game.playerB.name}
                </button>
            </div>
            <div>
                Played: {game.playerB.played}
            </div>
        </div>
    </div>
    )
}

export default Game;