import { alpha } from "@mui/material/styles";
import { styled } from '@mui/system';
import { deepPurple } from "@mui/material/colors";
import design4 from "../../assets/images/design1.png";
import design2 from "../../assets/images/design2.png";
import design3 from "../../assets/images/boardsDRed.png";
import design1 from "../../assets/images/boardsD.png";
import defaulttheme from "../../assets/images/defaulttheme.png";
import React, { Component } from "react";

const id = localStorage.getItem("setting_id");
const useStyles = styled((theme) => ({
  ...theme.spread,

  // boardCard: {
  //   boxShadow: "-15px -15px 2px #ffff4d",
  //   position: "relative",
  //   background: "#ffff4d",
  //   width: "200px",
  //   minHeight: "200px",
  //   height: "auto",
  //   border: "none",
  //   borderColor: "transparent",
  //   borderRadius: "4px",
  //   margin: "10px 5px 20px auto",
  //   overflow: "hidden",
  //   "&::before": {
  //     position: "absolute",
  //     bottom: 0,
  //     right: 0,
  //     content: '""',
  //     borderWidth: "0 0 16px 16px",
  //     borderStyle: "solid",
  //     background: "transparent",
  //     borderColor: "transparent #658E15 #fff",
  //     overflow: "hidden",
  //   },
  // },

  

  boardCard: {
    // boxShadow: "-15px -15px 2px #ffff4d",

    position: "absolute",
    backgroundImage: id === "1" ? `url(${design1})` : id ==="2" ? `url(${design3})` : `url(${defaulttheme})` ,
    width: "150px",
    // left: "615px",
    // top: "193px",
    minHeight: "240px",
    // height: "auto",
    border: "none",
    borderColor: "transparent",
    borderRadius: "20px",
    backdropfilter: "blur(10px)",
    // mixblendmode: "soft-light",
    // margin: "10px 5px 20px auto",

    overflow: "hidden",

    // "&::after": {
    //   position: "absolute",
    //   // bottom: 0,
    //   // left: 0,
    //   content: '"   "',
    //   // borderWidth: "0 0 16px 16px",
    //   borderRadius: "50%",
    //   width: "95px",
    //   height: "95px",
    //   left: "-20px",
    //   top: "235px",
    //   // mixblendmode: "soft-light",
    //   // backgroundblendmode:"screen",

    //   borderStyle: "solid",
    //   background: "#B2C8DF",
    //   border: "none",
    //   borderColor: "transparent",

    //   // overflow: "hidden",
    // },
    // "&::before": {
    //   position: "absolute",
    //   // bottom: 0,
    //   // left: 0,
    //   content: '"   "',
    //   mixblendmode: "soft-light",
    //   // borderWidth: "0 0 16px 16px",
    //   borderRadius: "50%",
    //   width: "170px",
    //   height: "170px",
    //   left: "150px",
    //   top: "-40px",

    //   borderStyle: "solid",
    //   background: "#B2C8DF",
    //   borderColor: "transparent",
    //   border: "none",

    // overflow: "hidden",
    // },
  },

  main:{
    backgroundImage: `url(${design1})`
    
  },

  boardCard1: {
    // boxShadow: "-15px -15px 2px #ffff4d",
    

    backgroundImage: id === "1" ? `url(${design2})` : `url(${design4})`,
    width: "250px",
    // left: "615px",
    // top: "193px",\
    height: "80px",
    // height: "auto",
    border: "none",
    borderColor: "transparent",
    borderRadius: "20px",
    backdropfilter: "blur(10px)",
    // mixblendmode: "soft-light",
    // margin: "10px 5px 20px auto",

    overflow: "hidden",

    // "&::after": {
    //   position: "absolute",
    //   // bottom: 0,
    //   // left: 0,
    //   content: '"   "',
    //   // borderWidth: "0 0 16px 16px",
    //   borderRadius: "50%",
    //   width: "95px",
    //   height: "95px",
    //   left: "-20px",
    //   top: "235px",
    //   // mixblendmode: "soft-light",
    //   // backgroundblendmode:"screen",

    //   borderStyle: "solid",
    //   background: "#B2C8DF",
    //   border: "none",
    //   borderColor: "transparent",

    //   // overflow: "hidden",
    // },
    // "&::before": {
    //   position: "absolute",
    //   // bottom: 0,
    //   // left: 0,
    //   content: '"   "',
    //   mixblendmode: "soft-light",
    //   // borderWidth: "0 0 16px 16px",
    //   borderRadius: "50%",
    //   width: "170px",
    //   height: "170px",
    //   left: "150px",
    //   top: "-40px",

    //   borderStyle: "solid",
    //   background: "#B2C8DF",
    //   borderColor: "transparent",
    //   border: "none",

    // overflow: "hidden",
    // },
  },




  root: {
    padding: theme.spacing(2,25),
    flexGrow: 1,
    width: "100%",
    [theme.breakpoints.between("xs", "sm")]: {
      padding: theme.spacing(8, 1),
      flexGrow: 1,
      width: "100%",
    },
    [theme.breakpoints.only("md")]: {
      padding: theme.spacing(1, 8),
      flexGrow: 1,
      width: "100%",
    },
  },
  type: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: "#990066",
    top: 5,
    left: 10,
  },
  omni: {
    height: "40px",
    [theme.breakpoints.down("md")]: {
      width: "45px",
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
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha("#bac8d8", 0.15),
    "&:hover": {
      backgroundColor: alpha("#bac8d8", 0.25),
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
// @media (max-width: 550px) {
//   .boardCard1 {
//     width: 46%;
//   }
// }

export { useStyles };
