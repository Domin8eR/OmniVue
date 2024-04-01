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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const fetchDataFromFirestore = async () => {
  try {
      const querySnapshot = await getDocs(collection(firestore, "board"));
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
      <Header x="Lists" />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className="cardContainer" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#1976D2' }}>
                <TableCell sx={{ color: 'white', textAlign: 'center' }}>Tenant Id</TableCell>
                <TableCell align="center" sx={{ color: 'white', textAlign: 'center' }}>Project Id</TableCell>
                <TableCell align="center" sx={{ color: 'white', textAlign: 'center' }}>Project Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {info.map((data, index) => (
                <TableRow key={index}>
                  
                  <TableCell align="center">{data.tenantid}</TableCell>
                  <TableCell align="center">{data.projectid}</TableCell>
                  <TableCell align="center">{data.projectname}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </div>
    </>
  )
}

export default Home;
