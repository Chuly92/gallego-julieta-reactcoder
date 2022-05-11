import React from 'react';
import logo from '../assets/reactlogo.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Avatar, Tooltip } from '@mui/material';

export const NavBar = () => {
  return (
    <Box>
      <AppBar position="static" sx={{ bgcolor: 'black' }}>
        <Toolbar>

          <IconButton edge="start" aria-label="menu">
            <img
              src={logo} alt="logo"
              style={{ maxWidth: 30, maxHeight: 30 }}
            />
          </IconButton>

          <Typography
            variant="h6" component="div" color="white"
            sx={{ flexGrow: 1 }}
          >
            PikaStore
          </Typography>

          <Button
            sx={{ textTransform: 'capitalize', fontSize: 16 }}
            color="secondary"
          >
            Homepage
          </Button>

          <Button
            sx={{ textTransform: 'capitalize', fontSize: 16 }}
            color="secondary"
          >
            Store</Button>

          <Button
            sx={{ textTransform: 'capitalize', fontSize: 16 }}
            color="secondary"
          >
            New Incomes</Button>


          <Box >
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0, ml: 10 }}>
                <Avatar alt="user" />
              </IconButton>
            </Tooltip>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
};