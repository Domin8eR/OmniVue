import { makeStyles, fade } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  ...theme.spread,

  card: {
    position: "relative",
    background: "#ffff4d",
    width: "200px",
    minHeight: "200px",
    height: "auto",
    border: "none",
    borderColor: "transparent",
    borderRadius: "4px",
    margin: "10px auto 20px auto",
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      right: 0,
      content: '""',
      borderWidth: "0 0 16px 16px",
      borderStyle: "solid",
      background: "transparent",
      borderColor: "transparent #658E15 #ccffff",
      overflow: "hidden",
    },
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
    border: "1px solid #ebf5fb",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#bac8d8", 0.15),
    "&:hover": {
      backgroundColor: fade("#bac8d8", 0.25),
    },
    marginRight: "0",
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
      marginLeft: "60px",
      width: "270px",
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
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  emergencyCard: {
    border: "2px solid red",
  },

  paper: {
    background: "#ffff4d",
    position: "relative",
    minWidth: 250,
    maxWidth: 300,
    minHeight: 300,
    height: "auto",
    overflow: "hidden",
    borderBottomRightRadius: "20%",
    "&::before": {
      position: "absolute",
      bottom: 0,
      right: 0,
      content: '""',
      background: "transparent",
      borderWidth: "0 0 45px 45px",
      borderStyle: "solid",
      overflow: "hidden",
      borderColor: "transparent #658E15 #658E15",
    },
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
    top: 50,
    left: 10,
  },
  smallCardSummary: {
    position: "relative",
    top: 30,
    left: 20,
    marginRight: 40,
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 3 /* number of lines to show */,
    WebkitBoxOrient: "vertical",
  },
  summary: {
    position: "relative",
    top: 45,
    left: 30,
    marginRight: 50,
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2 /* number of lines to show */,
    WebkitBoxOrient: "vertical",
  },
  omni:{

    height:"40px",
    marginLeft:"10px",
    [theme.breakpoints.down("md")]: {
      width:"65px"
    }


  },
  dueDate: {
    position: "absolute",
    top: 50,
    right: 10,
  },
  description: {
    position: "relative",
    top: 55,
    left: 30,
    marginRight: 40,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 5 /* number of lines to show */,
    WebkitBoxOrient: "vertical",
  },
  assignTo: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: "#0000CC ",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  assignToFront: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: "#0000CC ",
    position: "absolute",
    bottom: 10,
    left: 10,
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
