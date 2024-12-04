import React, { useState } from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
//import FastfoodIcon from '@mui/icons-material/Fastfood';
import { NavLink } from 'react-router-dom';
import "../styles/Headerstyles.css";
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logo.svg'
const Header = () => {
  const [mobileopen, setmobileopen] = useState(false)
  const handleDrawerToggle = () => {
    setmobileopen(!mobileopen)
  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        color='goldenrod' variant='h6' component={"div"} sx={{ flexGrow: 1 }}>
        <img src={logo} alt="logo" height={'70'} width="250" />
      </Typography>
      <Divider />

      <ul className='mobile-navigation'>

        <li>
          <NavLink activeClassName='active' to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to={'/About'}>About</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to={'/Menu'}>Menu</NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to={'/Contact'}>Contact</NavLink>
        </li>

      </ul>


    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton edge={'start'} sx={{ color: 'inherit', mr: '2', display: { sm: 'none' } }} onClick={handleDrawerToggle}>

              <MenuIcon />
            </IconButton>
            <Typography
              color='goldenrod' variant='h6' component={"div"} sx={{ flexGrow: 1 }}>
              <img src={logo} alt="logo" height={'70'} width="250" />
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigationmenu'>
                <li>
                  <NavLink activeClassName='active' to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink activeClassName='active' to={'/About'}>About</NavLink>
                </li>
                <li>
                  <NavLink activeClassName='active' to={'/Menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink activeClassName='active' to={'/Contact'}>Contact</NavLink>
                </li>


              </ul>
            </Box>
          </Toolbar>

        </AppBar>
        <Box component={'nav'}>
          <Drawer variant='temporary'
            open={mobileopen}
            onClose={handleDrawerToggle}
            sx={{ display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-Paper': { boxSizing: 'border-box', width: '240px', }, }}>
            {drawer}
          </Drawer>

        </Box>
        <Box >
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
