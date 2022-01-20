import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Header = () => {
  return (
    <Box
      sx={{
        // width: '40%',
        fontSize: '2rem',
        display: 'flex',
        justifyContent: 'center',
      }}
      md={{
        fontSize: '6rem',
      }}
    >
      <Typography
        variant="h1"
        component="div"
        gutterBottom
        sx={{
          fontSize: {
            lg: 75,
            md: 50,
            sm: 35,
            xs: 20,
          },
        }}
      >
        Space X Launches
      </Typography>
    </Box>
  )
}

export default Header
