import * as React from "react";
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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ScienceIcon from "@mui/icons-material/Science";

import Logo from "../assets/sciconnect-txt.png";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { ColorMode } from "./ColorMode";
const pages = [
  { name: "Home", path: "/sciconnect/" },
  { name: "About", path: "/sciconnect/About" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const LogoBox = (
    <Box
      component="img"
      sx={{
        // display: 'flex',
        // width: '100%',
        // display: { xs: "flex", md: "none" },
        // flexGrow: 1,
        // flex_direction: "row",
        // mr: 1,
        // ml: 1,
        height: 40,
        width: 150,
        // // alignItems: "end",
        // bgcolor: "#FFFF",
        // // justifyContent: 'center',
        maxHeight: { xs: 40, md: "none" },
        maxWidth: { xs: 150, md: "none" },
      }}
      alt="SciConnect."
      src={Logo}
    />
  );
  const LogoBoxW = (
    <Box
      component="img"
      sx={{
        display: { xs: "none", md: "flex" },
        mr: 1,
        // ml: 1,
        height: 40,
        width: 150,
        maxHeight: { xs: 300, md: 150 },
        maxWidth: { xs: 1000, md: 150 },
      }}
      alt="SciConnect."
      src={Logo}
    />
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ScienceIcon sx={{ display: { xs: "none", md: "flex" }, mr: 2 }} />
          {LogoBoxW}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SciConnect.
          </Typography> */}

          <Box
            sx={{
              // width: '50%',
              // justifyContent: 'center',
              // flexDirection: { xs: "flex", md: "row" },
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
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
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "inline-flex", md: "none" },
              // flexDirection: "row",
              // height: '100%',
              width: 40,
              // mr: 0,
            }}
          >
            <ScienceIcon
              sx={{
                // display: { xs: "inline-flex", md: "none" },
                // flexDirection: "row",
                height: 40,
                // width: 10,
                mr: 1,
                // flexGrow: 1,
              }}
            />
            {LogoBox}
          </Box>

          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="/sciconnect/About"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SciConnect
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                to={page.path}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <ColorMode />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
}
export default ResponsiveAppBar;
