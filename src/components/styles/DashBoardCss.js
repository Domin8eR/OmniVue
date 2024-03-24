
import { makeStyles, fade } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
import omnivuelogo from "../../assets/images/omnivuelogo.jpg";


const useStyles = makeStyles((theme) => ({
    ...theme.spread,
  
   
  
    omni:{
  
      height:"40px",
      [theme.breakpoints.down("md")]: {
        width:"65px"
      }
  
  
    },
  
    title: {
      fontWeight: "600",
      color: "#032540",
      letterSpacing: "2px",
      textTransform: "uppercase",
      
      flexGrow: 1,
      display: "none",
      padding: theme.spacing(1, 8),
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    appbar: {
      backgroundColor: "white",
    },
    search: {
      color: "#032540",
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade("#bac8d8", 0.15),
      "&:hover": {
        backgroundColor: fade("#bac8d8", 0.25),
      },
      marginRight: "80px",
      width: "100%",
      [theme.breakpoints.between("lg", "xl")]: {
        marginLeft: "0",
        width: "auto",
      },
      [theme.breakpoints.only("md")]: {
        marginLeft: "0",
        width: "auto",
      },
      [theme.breakpoints.between("xs", "sm")]: {
        marginLeft: "50px",
        width: "280px",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "25ch",
        },
      },
    },
  }));
  
  export { useStyles };
  