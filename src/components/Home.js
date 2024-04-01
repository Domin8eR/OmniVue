import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Header from "./Header";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useStyles } from "./styles/MainBoardCss";
import { Box } from "@mui/system";
import { Chip, Grid, Paper } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { firestore } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

export const fetchDataFromFirestore = async () => {
  try {
      const querySnapshot = await getDocs(collection(firestore, "Project"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      return data;
  } catch (error) {
      console.error("Error fetching documents: ", error);
      throw error;
  }
};
const Home = () => {
  const classes = useStyles();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromFirestore();
        setInfo(data);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header x="Boards" />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div className="cardContainer" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          {info.map((item, index) => (
            
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 1,
                    width: 300,
                    height: 300,
                  },
                }}
              >
              <Paper key={index} elevation={3} style={{ padding: 20, position: "relative" }}>
                {/* Delete and Edit buttons */}
                <Grid container justifyContent="flex-start">
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </Grid>

                {/* Chip */}
                <Chip
                  label={item.prjPrivate == 'Y' ? "Private" : "Public"} 
                  variant="outlined"
                  color="primary"
                  style={{ position: "absolute", top: 20, right: 20, backgroundColor: "#b9ecbbde" }}
                />

                {/* Heading */}
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  style={{ minHeight: 150 }}
                >
                  <Typography variant="h6" style={{ color: "blue" }}>{item.prjName}</Typography> {/* Assuming projectname is stored in each item */}
                </Grid>

                {/* Submit Button */}
                <Grid container justifyContent="center">
                  <Button variant="contained" color="primary">
                    Select
                  </Button>
                </Grid>
              </Paper>
          </Box>
          
          ))}
        </div>
      </div>
    </>
  )
}

export default Home;
