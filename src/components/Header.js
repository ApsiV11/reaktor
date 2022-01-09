import React from 'react'

import Box from '@mui/material/Box';

const Header = ({text}) => (
    <Box sx={{bgcolor: 'darkgray'}}>
        <h1 align="center">{text}</h1>
    </Box>
)

export default Header;