import { makeStyles, fade } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";
import smallcard2 from "../../assets/images/smallcard2.png";
import smallcard3 from "../../assets/images/smallcard3.png";


const id = localStorage.getItem("setting_id");
const useStyles = makeStyles((theme) => ({
    ...theme.spread,

  boardCard: {
    boxShadow: "-15px -15px 2px #ffff4d",
    position: "relative",
    background: "#ffff4d",
    width: "200px",
    minHeight: "200px",
    height: "auto",
    border: "none",
    borderColor: "transparent",
    borderRadius: "4px",
    margin: "10px 5px 20px auto",
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      right: 0,
      content: '""',
      borderWidth: "0 0 16px 16px",
      borderStyle: "solid",
      background: "transparent",
      borderColor: "transparent #658E15 #fff",
      overflow: "hidden",
    },
  },

  card: {
    position: "relative",
    background: "#ffff4d",
    width: "200px",
    minHeight: "110px",
    height: "auto",
    border: "none",
    borderColor: "transparent",
    borderRadius: "4px",
    margin: "10px auto 20px auto",
    overflow: "hidden",
    // "&::before": {
    //   position: "absolute",
    //   bottom: 0,
    //   right: 0,
    //   content: '""',
    //   borderWidth: "0 0 16px 16px",
    //   borderStyle: "solid",
    //   background: "transparent",
    //   borderColor: "transparent #658E15 #ccffff",
    //   overflow: "hidden",
    // },
  },
  title: {
    color: "#032540",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontWeight: "600",
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
    border: "1px solid #ebf5fb",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#bac8d8", 0.15),
    "&:hover": {
      backgroundColor: fade("#bac8d8", 0.25),
    },
    marginLeft: "0",
    width: "100%",
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "50px",
      width: "auto",
    },
    [theme.breakpoints.between("lg", "xl")]: {
      marginLeft: "80px;",
      width: "auto",
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
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
    [theme.breakpoints.between("lg", "xl")]: {
      width: "25ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  emergencyCard: {
    border: "2px solid red",
  },
  omni:{

    height:"40px",
    [theme.breakpoints.down("md")]: {
      width:"65px"
    }


  },

  paper: {
    // backgroundImage: id === "1" ? `url(${smallcard2})` : `url(${smallcard3})`,

    borderTop: id === "1" ? ("10px solid #2583F0") : id === "2" ? ("10px solid #96C83C") : ("10px solid #FFFF00"),

    position: "relative",
    minWidth: 250,
    maxWidth: 300,
    minHeight: 310,
    height: "auto",
    overflow: "hidden",
    borderBottomRightRadius: "20%",
    // "&::before": {
    //   position: "absolute",
    //   bottom: 0,
    //   right: 0,
    //   content: '""',
    //   background: "transparent",
    //   borderWidth: "0 0 45px 45px",
    //   borderStyle: "solid",
    //   overflow: "hidden",
    //   borderColor: "transparent black",
    // },
  },

  type: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: "#990066",
    top: 5,
    left: 10,
  },
  editIcon: {
    position: "absolute",
    top: 2,
    right: 40,
  },
  shareIcon:{
    position: "absolute",
    top: 2,
    right: 75,

  },
  subIcon:{
    position: "absolute",
    top: 2,
    right: 100,

  },
  newEditIcon: {
    position: "absolute",
    top: 2,
    right: 100,
  },
  expandIcon: {
    position: "absolute",
    top: 5,
    right: 0,
  },
  IssueId: {
    position: "absolute",
    fontWeight: "bold",
    top: 15,
    left: 20,
  },
  smallCardSummary: {
    position: "relative",
    top: 38,
    left: 0,
    marginRight: 120,
    marginTop:30,
    // fontWeight: "bold",
    overflow: "hidden",
    fontSize:18,
    
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 3 /* number of lines to show */,
    WebkitBoxOrient: "vertical",
  },
  summary: {
    position: "relative",
    top: 120,
    left: 30,
    marginRight: 50,
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2 /* number of lines to show */,
    WebkitBoxOrient: "vertical",
  },
  dueDate: {
    position: "absolute",
    top: 50,
    right: 10,
  },
  description: {
    position: "relative",
    top: 140,
    left: 50,
    marginRight: 50,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 5 /* number of lines to show */,
    WebkitBoxOrient: "vertical",
  },
  assignTo: {
    color: theme.palette.getContrastText(deepPurple[500]),
    // backgroundColor: "black",
    position: "absolute",
    bottom: -205,
    left: 10,
  },
  assignToFront: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: "black",
    position: "absolute",
    height:28,
    width:28,
    bottom: 60,
    // bottom: 2,
    left: 5,
  },
  businessValue: {
    position: "absolute",
    color: theme.palette.getContrastText(deepPurple[300]),
    backgroundColor: deepPurple[300],
    padding: 5,
    bottom: 15,
    right: 80,
  },
  arrow: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    marginLeft: "-50px",
  },
  delIcon: {
    position: "absolute",
    top: 2,
    right: 5,
  },
  loadingProgress: {
    width: "7%",
    position: "absolute",
    top: 40,
    right: 18,
  },
  text: {
    display: "block",
    width: "100px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
}));

export { useStyles };
