import { makeStyles, fade, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ...theme.spread,
  root:{
width:"100%",

  },
  icons: {
    float: "right",
  },
  spin: {
    margin: "auto",
    animation: "$spin 1s 1",
    animationTimingFunction: "ease",
  },
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  omni:{

    height:"40px",
    marginTop: "20px",
    marginLeft: "20px",
    [theme.breakpoints.down("md")]: {
      width:"65px"
    }


  },
  emergencyLane: {
    color: "red",
    margin: "auto",
    fontWeight: "bold",
  },
  headerCell:{
    padding:"0",
    margin:"0",
    // fontWeight:"bold",
    fontSize:"20px",
    // backgroundColor:"black",
    justifyContent:"center",
  },
  table:{
    [theme.breakpoints.between('xs','sm')]: {
      marginTop: "80px",
      
      
    },
  },
  expandtext:{
    color:"#e3f2fd",
    fontWeight:"bold",
    padding:"0",
    marginTop:"0",
    justifyContent:"left",
  },
  paper: {
    backgroundColor: "#f0f2f5",
  },
  grow:{
    flexGrow:1,
  },
  title: {
    fontWeight:"600",
		color:"#032540",
    letterSpacing:"2px",
    textTransform:"uppercase",
    flexGrow: 1,
    display: 'none',
		padding:theme.spacing(1,8),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  mobilemenu:{
    marginLeft:"50px",
  },
  menuControl:{
    width:"100px",
    transform:"translateX(-15%)"
  },
  appbar:{
     backgroundColor:"white",
  },
  
 
  search: {
	color:"#032540",
  border:"1px solid #ebf5fb",
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#bac8d8", 0.15),
    '&:hover': {
      backgroundColor: fade("#bac8d8", 0.25),
    },
    marginRight: '0',
    
    [theme.breakpoints.between('xs','sm')]: {
      marginTop: "-50px",
      marginLeft: "60px",
      width: '270px',
    },
    [theme.breakpoints.between('sm','md')]: {
      marginLeft:"-50px",
      width:"200px",
      marginTop:"1ch",
    },
    [theme.breakpoints.between('lg','xl')]: {
      marginLeft: "10px",
      width:"300px,"
    },
    
  },
  filter:{
    width:"100%",
    [theme.breakpoints.between('xs','sm')]: {
      marginTop: "70px",
      marginBottom:"5px",
      marginLeft:"-235px",
      width:"27ch",
    },
    [theme.breakpoints.between('sm','md')]: {
      marginLeft:"10px",
      width:"25ch",
      marginTop:"15px",
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
    [theme.breakpoints.between('xs','sm')]: {
      width: "20ch",
      '&:focus': {
        width: "20ch",
      },
    },
    [theme.breakpoints.between('sm','md')]: {
      width: "15ch",
      '&:focus': {
        width: "18ch",
      },
    },
    [theme.breakpoints.between('lg','xl')]: {
      width: "25ch",
      '&:focus': {
        width: "30ch",
      },
    },
  },
  expand: {
    color:"#bbbcbd",
    transform: 'rotate(0deg)',
    marginLeft:'auto',
    transition:theme.transitions.create('transform',{
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover':{
      color:"#093841",
    },
    
  },

  cardView:{
      overflowX: "auto",
      overflowY: "auto",
      minHeight: "650px",
      height: "auto",
      [theme.breakpoints.between('xs','sm')]: {
        padding: theme.spacing(6, 8),
      },
      [theme.breakpoints.between('sm','md')]: {
        padding: theme.spacing(1, 8),
      },
      [theme.breakpoints.between('md','lg')]: {
        padding: theme.spacing(1, 8),
      },
      [theme.breakpoints.between('lg','xl')]: {
        padding: theme.spacing(8, 8),
      },
  },
  expandOpen:{
    transform:'rotate(180deg)',
  },

 
}));

export { useStyles };
