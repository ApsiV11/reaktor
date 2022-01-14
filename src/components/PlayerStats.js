import React, {useState} from 'react'

import utils from '../services/utils'

import Game from './Game'

import { List, ListItem, ListItemText, Divider, Box, Chip, Pagination } from '@mui/material'

//Component for showting the player info we want to show
const PlayerStats = ({name, games, choosePlayer}) => {
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return(
    <div className="data">
        <h2 align='center'>Stats</h2>
        <List sx={{bgcolor: 'darkgray', px:"5%", py:"10px", borderRadius: '10px'}}>
            <Divider><Chip sx={{bgcolor: 'black'}} label="Player"/></Divider>
                    <h3 align="center">{name}</h3>
            <Divider><Chip sx={{bgcolor: 'black'}} label="Stats"/></Divider>
            <ListItem>
                <ListItemText align='center'>Win ratio: {games && games.length>0 ? `${utils.calculateWinRatio(name, games)}%` : "Loading..."}</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText align='center'>Total games: {games && games.length>0 ? games.length : "Loading..."}</ListItemText>
            </ListItem>
            <ListItem>
                <ListItemText align='center'>Most played hand: {games && games.length>0 ? utils.calculatePlayedHand(name, games) : "Loading..."}</ListItemText>
            </ListItem>
            <Divider><Chip sx={{bgcolor: 'black'}} label="Player's games"/></Divider>
            <Box>
                {games && games.length>0 ? games.sort((a, b) => b.t-a.t).filter((game, i) => i>=5*(page-1) && i<=5*(page-1)+4).map(game => 
                    <Game
                    key={game.gameId}
                    game={game}
                    choosePlayer={choosePlayer}
                    />
                ) : "Loading..."}
            </Box>
            <ListItem sx={{display:"flex", justifyContent: 'center'}}>
                <Pagination 
                    count={games.length>0 ? Math.ceil(games.length/5) : 0} 
                    page={page} 
                    onChange={handleChange} 
                    color="primary" 
                    boundaryCount={2}
                    siblingCount={0}
                    showFirstButton 
                    showLastButton 
                />
            </ListItem>
        </List>
    </div>
    )
}

export default PlayerStats;