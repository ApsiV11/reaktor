import React, {useState} from 'react'

import utils from '../services/utils'

import Game from './Game'

import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ClearIcon from '@mui/icons-material/Clear';

//Component for showting the player info we want to show
const PlayerStats = ({name, games, choosePlayer}) => {
    const [page, setPage] = useState(0);

    const handleClick = (direction) => {
        page+direction>0 ? setPage(page+direction) : setPage(0)
    }

    const resetPage = () => {
        setPage(0)
    }

    return(
    <div>
        <h2 align='center'>Stats</h2>
        <List sx={{bgcolor: 'darkgray', px:"10px", py:"10px", borderRadius: '10px'}}>
            <Divider><Chip sx={{bgcolor: 'black'}} label="Player"/></Divider>
                    <h3 align="center">{name}</h3>
            <Divider><Chip sx={{bgcolor: 'black'}} label="Stats"/></Divider>
            <ListItem>
                <ListItemText>Win ratio: {games && games.length>0 ? `${utils.calculateWinRatio(name, games)}%` : "Loading..."}</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>Total games: {games && games.length>0 ? games.length : "Loading..."}</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText>Most played hand: {games && games.length>0 ? utils.calculatePlayedHand(name, games) : "Loading..."}</ListItemText>
            </ListItem>
            <Divider><Chip sx={{bgcolor: 'black'}} label="Player's games"/></Divider>
            <Box>
                {games && games.length>0 ? games.sort((a, b) => b.t-a.t).filter((game, i) => i>=5*page && i<=5*page+4).map(game => 
                    <Game
                    key={game.gameId}
                    game={game}
                    choosePlayer={choosePlayer}
                    />
                ) : "Loading..."}
            </Box>
            <ListItem>
                <Button variant="contained"
                    sx={{mx:"10px", px:"1px", py:"1px", borderRadius: '5px'}} 
                    onClick={() => handleClick(-1)}
                >
                    <ArrowBack style={{fill: "white"}}/>
                </Button>
                    Page {page+1}
                <Button variant="contained"
                    sx={{mx:"10px", px:"1px", py:"1px", borderRadius: '5px'}} 
                    onClick={() => handleClick(1)}
                >
                    <ArrowForward style={{fill: "white"}}/>
                </Button>
                <Button variant="contained"
                    sx={{mx:"10px", px:"1px", py:"1px", borderRadius: '5px'}} 
                    onClick={() => resetPage()}
                >
                    <ClearIcon style={{fill: "white"}}/>
                </Button>
            </ListItem>
        </List>
    </div>
    )
}

export default PlayerStats;