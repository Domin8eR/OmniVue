import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc } from "@firebase/firestore";
import { firestore } from "../firebase.config.js";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import Header from "./Header";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { auth } from '../firebase.config.js';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const ref = collection(firestore, "board");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [formValues, setFormValues] = useState({
    tenantid:"",
    projectid:"",
    projectname:"",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const addPost = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    try {
      await addDoc(ref, formValues);
            console.log("Document successfully written!");
            setOpenSnackbar(true);
            setTimeout(() => {
                navigate("/home");
            }, 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const isFormValid = () => {
    const { tenantid, projectid, projectname } = formValues;
    return tenantid.trim() !== "" && projectid.trim() !== "" && projectname.trim() !== "";
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Header x="Boards" />
      <AppBar position="fixed">
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="h6" noWrap>
            OmniVue WEB
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="appointment" style={{ marginTop: "140px" }}>
          <h2 style={{ margin: "20px" }}>Edit Board Form</h2>
          <form onSubmit={addPost}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tenant Identification"
                  variant="outlined"
                  type="string"
                  placeholder="Please enter tenant ID"
                  name="tenantid"
                  value={formValues.tenantid}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Project Identification"
                  variant="outlined"
                  type="string"
                  placeholder="Please enter project ID"
                  name="projectid"
                  value={formValues.projectid}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Project Name"
                  variant="outlined"
                  type="string"
                  placeholder="Please enter project name"
                  name="projectname"
                  value={formValues.projectname}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ margin: "15px" }}
                  disabled={!isFormValid()}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={"board details added Successfully"}
      />
    </>
  );
};

export default Admin;
