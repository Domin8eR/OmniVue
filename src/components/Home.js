import React from "react";
import Typography from '@mui/material/Typography';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Header from "./Header";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useStyles } from "./styles/MainBoardCss";
import Board from "../assets/images/Board.png";
import omnivuelogo from "../assets/images/omnivuelogo.jpg";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Header x="Boards" />
      {/* <AppBar onClick={() => window.scroll(0,0)} position="sticky" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" noWrap>
            Boards
            <div>
              <p style={{ color: "red", fontSize: 12 }}>Project Name</p>
            </div>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              id="search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div>
            <img src={omnivuelogo} className={classes.omni} />
          </div>
        </Toolbar>
      </AppBar> */}

      hello world
    </>
  )
}

export default Home
