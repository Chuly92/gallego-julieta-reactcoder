import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/pikachu.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  //Define menu values
  const pages = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "Store", route: "/item/all" },
    { id: 3, name: "New Arrivals", route: "/item/all" },
  ];

  const settings = [
    { id: 1, name: "Account", route: "/account"},
    { id: 2, name: "Orders", route: "/orders"}, 
    { id: 3, name: "Logout", route: "/logout"},
  ];

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

  let navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ bgcolor: "black" }}>
      <Container maxWidth="3840px">
        <Toolbar disableGutters>
          {/* Render icon page in full-size window (width up to 900px) */}
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          >
            <img
              src={logo}
              alt="logo"
              disabled
              style={{ maxWidth: 50, maxHeight: 50 }}
            />
          </IconButton>

          {/* Render title store in full-size window (width up to 900px) */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                color: "red",
              }}
            >
              PikaStore
            </Typography>
          </Link>

          {/* Render pages in responsive window (width down to 900px) */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(`${page.route}`);
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Render icon page in responsive window (width down to 900px) */}
          <IconButton
            edge="start"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          >
            <img
              src={logo}
              alt="logo"
              disabled
              style={{ maxWidth: 40, maxHeight: 40 }}
            />
          </IconButton>

          {/* Render title in responsive window (width down to 900px) */}
          <Link to="/" style={{ textDecoration: "none", flexGrow: 1 }}>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "flex", md: "none" },
                fontFamily: "monospace",
                color: "red",
                textDecoration: "none",
                fontSize: 24,
              }}
            >
              PikaStore
            </Typography>
          </Link>

          {/* Render pages in full-size window (width up to 900px) */}
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-start",
              alignContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(`${page.route}`);
                }}
                key={page.id}
                sx={{
                  color: "white",
                  display: "block",
                  textTransform: "capitalize",
                  fontSize: 16,
                  letterSpacing: ".2rem",
                  mx: 2,
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Insert shopping cart */}
          <Button>
            <CartWidget qtyItems={"3"} />
          </Button>

          {/* Render user settings for all screens */}
          <Box>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Julieta" src="/" />
            </IconButton>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem 
                key={setting.id} 
                onClick={() => {
                  handleCloseUserMenu();
                  navigate(`${setting.route}`);
                }}
                  >
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
