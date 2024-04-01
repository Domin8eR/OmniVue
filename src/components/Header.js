import clsx from 'clsx';
import React from 'react';
import { useState, useEffect } from 'react';
import { AppBar, Zoom, Toolbar, Typography, Tooltip, Divider, IconButton, } from '@mui/material';
import { Drawer, InputBase, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import BallotIcon from '@mui/icons-material/Ballot';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import TerminalIcon from '@mui/icons-material/Terminal';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase.config.js';

import { ExitToApp, SupervisorAccount, ChevronLeft, ChevronRight, BugReport, Menu } from '@mui/icons-material';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../assets/images/logo.png";
import "./styles/common.css";
import { Dashboard, Search } from "@mui/icons-material";
import ListIcon from "@mui/icons-material/List";
import { useStyles } from './styles/sidebarCss.js';
import { useTheme } from "@mui/material/styles";
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Grow from '@mui/material/Grow';
import SearchIcon from '@mui/icons-material/Search';

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const { displayName, email } = user;
            setUserData({ displayName, email });
            setIsLoggedIn(true);
            // Check if the user's email is admin email
            if (email === "piyushlenka02@gmail.com") {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
            
        } else {
            setIsLoggedIn(false);
        }
    });

    return () => unsubscribe();
}, []);


  return (<>
    {/* <IdleTimerDom/> */}
    <React.Fragment>
      <div className={classes.root}>
        <>
            <Drawer
              variant="permanent"
              className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              })}
              classes={{
                paper: clsx(classes.drawerPaper, {
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                }),
              }}
            >

              <List >
                {/* <div className="logoDiv">
                <Link to="/board" className={classes.link}>
                  <ListItem button>
                     
                      <ListItemIcon>
                     <img src={Logo} height="40" width="50" alt="OmniVué Board"/>
                     </ListItemIcon> 
                      <p className="logoText">{props.x}</p>  
                  </ListItem>
                   <br />
                    <p className={classes.smallLogo}>{props.x}</p> 
                  </Link>
                  </div>  */}
                <div className="logoDiv">

                  <Link to="/select_project" className={classes.link}>
                    <ListItem >

                      <ListItemIcon>
                        <img src={Logo} height="55" width="50" alt="OmniVué Board" />
                      </ListItemIcon>
                      <p className="logoText">{props.x}</p>
                    </ListItem>
                    <br />
                    {/* <p className={classes.smallLogo}>{props.x}</p> */}
                  </Link>
                </div>


                <Divider />


                {/* <Link exact to="/select_project" className={classes.link}>
                  <ListItem  className={classes.select}>
                    <Tooltip title="Select Project" TransitionComponent={Zoom} placement="right" >
                      <ListItemIcon className={classes.icon}>
                      <SelectAllIcon/>
                      </ListItemIcon>
                    </Tooltip>
                    <ListItemText
                      primary={"Select Project"}
                    />
                  </ListItem>
                </Link> */}

                {/* <Link exact to="/dashboard" disable className={classes.link}>
                  <ListItem  className={classes.select}>
                    <Tooltip title="Dashboard" TransitionComponent={Zoom} placement="right" >
                      <ListItemIcon className={classes.icon}>
                        <Dashboard />
                      </ListItemIcon>
                    </Tooltip>
                    <ListItemText
                      primary={"Dashboard"}
                    />
                  </ListItem>
                </Link> */}
                
                <Link exact to="/boards" className={classes.link}>
                  <ListItem  className={classes.select}>
                    <Tooltip title="Board" TransitionComponent={Zoom} placement="right" >
                      <ListItemIcon className={classes.icon}>
                        <BallotIcon />
                      </ListItemIcon>
                    </Tooltip>
                    <ListItemText
                      primary={"Board"}
                    />
                  </ListItem>
                </Link>

                <Link to="/list" className={classes.link}>
                  <ListItem className={classes.select}>
                    <Tooltip title="List" TransitionComponent={Zoom} placement="right" >
                      <ListItemIcon className={classes.icon}>
                        <ListIcon />
                      </ListItemIcon>
                    </Tooltip>
                    <ListItemText
                      primary={"List"}
                    />
                  </ListItem>
                </Link>

                {/* <Link exact to="/sprint" className={classes.link}>
                  <ListItem className={classes.select}>
                    <Tooltip title="Sprint" TransitionComponent={Zoom} placement="right" >
                      <ListItemIcon className={classes.icon}>
                        <TurnedInIcon />
                      </ListItemIcon>
                    </Tooltip>
                    <ListItemText
                      primary={"Sprint"}
                    />
                  </ListItem>
                </Link> */}

                {/* <Link exact to="/cli" className={classes.link}>
                  <ListItem  className={classes.select}>
                    <Tooltip title="CLI" TransitionComponent={Zoom} placement="right" >
                      <ListItemIcon className={classes.icon}>
                        <TerminalIcon />
                      </ListItemIcon>
                    </Tooltip>
                    <ListItemText
                      primary={"CLI"}
                    />
                  </ListItem>
                </Link> */}

                {isAdmin && (
                  <Link to="/account" className={classes.link}>
                    <ListItem  className={classes.select}>
                      <Tooltip title="Invoice&Quotation" TransitionComponent={Zoom} placement="right" >
                        <ListItemIcon className={classes.icon}>
                          <AccountBalanceIcon />
                        </ListItemIcon>
                      </Tooltip>
                      <ListItemText
                        primary={"Accounting"}
                      />
                    </ListItem>
                  </Link>)}

                  {isAdmin && (
                  <Link to="/admin" className={classes.link}>
                    <ListItem  className={classes.select}>
                      <Tooltip title="Admin" TransitionComponent={Zoom} placement="right" >
                        <ListItemIcon className={classes.icon}>
                          <SupervisorAccount />
                        </ListItemIcon>
                      </Tooltip>
                      <ListItemText
                        primary={"Admin"}
                      />
                    </ListItem>
                  </Link>)}
                <Link to="/" className={classes.link}>
                  <ListItem  className={classes.select} onClick={handleLogout}>
                    <Tooltip title="Log Out" TransitionComponent={Zoom} placement="right" >
                      <ListItemIcon className={classes.icon}>
                        <ExitToApp />
                      </ListItemIcon>
                    </Tooltip>
                    <ListItemText
                      primary={"Log Out"}
                    />
                  </ListItem>
                </Link>
              </List>

              <Divider />
              {/* <div className={classes.toolbar}>
              <IconButton onClick={handleDrawerClose} className={classes.link}>
                {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
              </IconButton>

              <IconButton onClick={handleDrawerOpen} className={classes.select}>
                {theme.direction === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
              </IconButton>

              </div> */}
            </Drawer>
          </>
          <AppBar
  position="fixed"
  className={clsx(classes.appBar, {
    [classes.appBarShift]: open,
  })}
>
  <Toolbar style={{ justifyContent: 'center' }}>
    {/* <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen} // Attach handleDrawerOpen here
      edge="start"
      className={clsx(classes.menuButton, {
        [classes.hide]: open,
      })}
    >
      <MenuIcon />
    </IconButton> */}
    <Typography variant="h6" noWrap>
      OmniVue WEB
    </Typography>
    {/* <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div> */}
  </Toolbar>
</AppBar>


        
      </div>
    </React.Fragment>
  </>);
}
export default Header;
