import React from 'react'

import Game from './Game'

import List from '@mui/material/List'

//Component responsible for showing the active games
const Games = ({type, games, choosePlayer}) => (
    <div className='data'>
        <List>
            <h2 align='center'>{type==="GAME_BEGIN" ? "Live Games" : "Recently Completed Games"}</h2>
            {
                games.filter((game) => game.type===type).map(game => 

                    <Game
                        key={game.gameId}
                        game={game}
                        choosePlayer={choosePlayer}
                    />
                )
            }
        </List>
    </div>
)

export default Games