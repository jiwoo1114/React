import React, { useState } from 'react'
import { Box, Button } from '@mui/material';

function MUI7() {
    const [color, setColor] = useState('Primary')
    
    const handleClick = () => { 
        setColor((PrevColor)=>(PrevColor === 'Primary' ? 'secondary':'primary'))
    }
    return ( 
        <Box>
            <Button variant='contained' color={color} onClick={handleClick}>toggle</Button>
        </Box>
     );
}

export default MUI7;
