import React from 'react'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'

const Game = ({game, choosePlayer}) => {
    const date = (new Date(game.t)).toLocaleDateString("en-US");
    const time = (new Date(game.t)).toLocaleTimeString("en-US");

    return(
    <List key={game.gameId} sx={{my: '10px', bgcolor: 'gray', px:"10px", py:"10px", borderRadius: '10px'}}>
        <Divider><Chip sx={{bgcolor: 'black'}} label="Game"/></Divider>
        <ListItem>
            <ListItemText align='center'>
                <strong>{game.gameId}</strong>
            </ListItemText>
        </ListItem>
        {game.t ?
        <>
            <Divider><Chip sx={{bgcolor: 'black'}} label="Date and time"/></Divider>
            <ListItem>
                <ListItemText align='center'>
                    <strong>{date}</strong>
                    <br/>
                    <strong>{time}</strong>
                </ListItemText>
            </ListItem>
        </>
        : null}
        {game.type==="GAME_RESULT" ?
        <>
            <Divider><Chip sx={{bgcolor: 'black'}} label="Result"/></Divider>
            <ListItem>
                <ListItemText align='center'>
                    <strong>
                        <strong>
                            {game.winner ? `${game.winner} wins` : "Draw"}
                        </strong>
                    </strong>
                </ListItemText>
            </ListItem>
        </>
        : null}
        <Divider><Chip sx={{bgcolor: 'black'}} label="Player A"/></Divider>
        <Box>
            <Box display="flex" alignItems="center" justifyContent="center" sx={{my:"5px"}}>
                <Button sx={{mx:"5px"}} variant="contained" onClick={() => choosePlayer(game.playerA.name)}>
                {game.playerA.name}
                </Button>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" sx={{my:"5px"}}>
                <strong>{game.playerA.played}</strong>
            </Box>
        </Box>
        <Divider><Chip sx={{bgcolor: 'black'}} label="Player B"/></Divider>
        <Box>
            <Box display="flex" alignItems="center" justifyContent="center" sx={{my:"5px"}}>
                <Button sx={{mx:"5px"}} variant="contained" onClick={() => choosePlayer(game.playerB.name)}>
                {game.playerB.name}
                </Button>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" sx={{my:"5px"}}>
                <strong>{game.playerB.played}</strong>
            </Box>
        </Box>
    </List>
    )
}

export default Game;