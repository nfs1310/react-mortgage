import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const Navbar = () => {
  return (
    // <AppBar position="static">
    //   <Toolbar>
    //     <IconButton
    //       size="large"
    //       edge="start"
    //       color="inherit"
    //       aria-label="menu"
    //       sx={{ mr: 2 }}
    //     >
    //     </IconButton>
    //     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //       Navbar
    //     </Typography>
    //   </Toolbar>
    // </AppBar>
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="xl">
          <Typography variant="h5" component="div">
            Bank of React
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>

  )
}

export default Navbar
