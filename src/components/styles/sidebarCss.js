
import { createStyles, useTheme, alpha, theme } from "@mui/material/styles";
import { styled } from '@mui/system';
const drawerWidth = 240;
const useStyles = styled((theme) =>
  createStyles({
    root: {
      body:"#022734",
      backgroundColor:"#022734",
      display: 'flex',
      flexGrow:1,
      
    },

    drawerPaper: { 
      backgroundColor:"#022734",
   },
   smallLogo:{
    transform: "translateY(-170%)",
    color:"#022734",
    fontSize:"13px",
    fontWeight:"600",
    paddingLeft:"1px",
   },
   link: { 
    textDecoration: 'none' ,
     color: "#ffffff", 
    //  '&:hover':{
    //    textDecoration:'none',
    //  },
     '&:focus':{
      backgroundColor:"#75a0c3",
    },
    '&:active':{
      backgroundColor:"#75a0c3",
     },
   },
   
   select:{
    color: "#ffffff", 
    // '&:hover':{
    //   color:"pink",
    //   textDecoration: 'none' ,
    //  },
     '&:focus':{
       backgroundColor:"#75a0c3",
     },
     '&:active':{
      backgroundColor:"#75a0c3",
     }
   },
   icon:{
      color:"#ffffff",
      '&:hover':{
        color:"pink",
        textDecoration: 'none' ,
       },
       '&:focus':{
         backgroundColor:"#75a0c3",
       },
   },
    appBar: {
      backgroundColor:"white",
      color:"#032540",
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    search: {
      position: 'relative',
      backgroundColor: alpha("#c3d5e9", 0.15),
      '&:hover': {
        backgroundColor: alpha("#c3d5e9", 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(55),
        width: 'auto',
      },
    },
    
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
    drawer: {
      backgroundColor:"#e3f2fd",
      color:"black",
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7) + 1,
      },
    },
   
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);
export { useStyles };
