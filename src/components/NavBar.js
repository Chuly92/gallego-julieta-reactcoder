import React, { useState } from 'react';
import logo from '../assets/pikachu.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


export const NavBar = () => {

  //Define menu values
  const pages = ['Home', 'Store', 'New Incomes'];
  const settings = ['Account', 'Orders', 'Logout'];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Render icon page in full-size window (widht up to 900px) */}
          <IconButton
            edge="start" aria-label="menu"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          >
            <img src={logo} alt="logo" style={{ maxWidth: 50, maxHeight: 50 }} />
          </IconButton>

          {/* Render title store in full-size window (width up to 900px) */}
          <Typography variant="h5"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              color: 'red'
            }}
          >
            PikaStore
          </Typography>

          {/* Render pages in responsive window (width down to 900px) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Render icon page in responsive window (width down to 900px) */}
          <IconButton
            edge="start" aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          >
            <img src={logo} alt="logo" style={{ maxWidth: 40, maxHeight: 40 }} />
          </IconButton>

          {/* Render title in responsive window (width down to 900px) */}
          <Typography variant="h6"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              color: 'red',
              textDecoration: 'none'
            }}
          >
            PikaStore
          </Typography>

          {/* Render pages in full-size window (width up to 900px) */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'center',
              alignContent: 'center', 
              display: { xs: 'none', md: 'flex' }
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ 
                  color: 'white', 
                  display: 'block', 
                  textTransform: 'capitalize', 
                  fontSize: 16, 
                  letterSpacing: '.2rem',
                  mx: 2
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Render user settings for all screens */}
          <Box sx={{ flexGrow: 0 }}>

            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Julieta" src="/" />
            </IconButton>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};