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

const Tenant = () => {
  const ref = collection(firestore, "TenantMaster");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [formValues, setFormValues] = useState({
    Tnt_ID:"",
    Tnt_Name:"",
    Tnt_Address:"",
    TnT_City:"",
    TnT_Country:"",
    TnT_StartDate:"",
    TnT_LicenseExpiryDate:"",
    TnT_KeyPoC_Name:"",
    TnT_KeyPoC_MobileNumber:"",
    TnT_KeyPoC_EmailID:"",
    TnT_AdminEmailID1:"",
    TnT_AdminEmailID2:"",
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
        navigate("/boards");
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
    const { Tnt_ID, Tnt_Name, Tnt_Address, TnT_City, TnT_Country, TnT_StartDate, TnT_LicenseExpiryDate, TnT_KeyPoC_Name, TnT_KeyPoC_MobileNumber, TnT_KeyPoC_EmailID, TnT_AdminEmailID1, TnT_AdminEmailID2 } = formValues;
    return Tnt_ID.trim() !== "" && Tnt_Name.trim() !== "" && Tnt_Address.trim() !== "" && TnT_City.trim() !== "" && TnT_Country.trim() !== "" && TnT_StartDate.trim() !== "" && TnT_LicenseExpiryDate.trim() !== "" && TnT_KeyPoC_Name.trim() !== "" && TnT_KeyPoC_MobileNumber.trim() !== "" && TnT_KeyPoC_EmailID.trim() !== "" && TnT_AdminEmailID1.trim() !== "";
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Header x="Admin" />
      <AppBar position="fixed">
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="h6" noWrap>
            OmniVue WEB
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="appointment" style={{ marginTop: "140px" }}>
          <h2 style={{ margin: "20px" }}>Add Tenant</h2>
          <form onSubmit={addPost}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tenant ID"
                  variant="outlined"
                  type="number"
                  placeholder="Please enter eight digit Tenant ID"
                  name="Tnt_ID"
                  value={formValues.Tnt_ID}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Tenant Name"
                  variant="outlined"
                  type="string"
                  placeholder="Please enter Tenant Name"
                  name="Tnt_Name"
                  value={formValues.Tnt_Name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  variant="outlined"
                  type="string"
                  placeholder="Please enter Address"
                  name="Tnt_Address"
                  value={formValues.Tnt_Address}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="City"
                  variant="outlined"
                  type="string"
                  placeholder="Please enter City"
                  name="TnT_City"
                  value={formValues.TnT_City}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Country"
                  variant="outlined"
                  type="string"
                  placeholder="Please enter Country"
                  name="TnT_Country"
                  value={formValues.TnT_Country}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Start Date"
                  variant="outlined"
                  type="date"
                  name="TnT_StartDate"
                  value={formValues.TnT_StartDate}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="License Expiry Date"
                  variant="outlined"
                  type="date"
                  name="TnT_LicenseExpiryDate"
                  value={formValues.TnT_LicenseExpiryDate}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Key Point of Contact Name"
                  variant="outlined"
                  type="string"
                  placeholder="Please enter Key PoC Name"
                  name="TnT_KeyPoC_Name"
                  value={formValues.TnT_KeyPoC_Name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Key Point of Contact Mobile Number"
                  variant="outlined"
                  type="string"
                  placeholder="Please enter Key PoC Mobile Number"
                  name="TnT_KeyPoC_MobileNumber"
                  value={formValues.TnT_KeyPoC_MobileNumber}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Key Point of Contact Email ID"
                  variant="outlined"
                  type="email"
                  placeholder="Please enter Key PoC Email ID"
                  name="TnT_KeyPoC_EmailID"
                  value={formValues.TnT_KeyPoC_EmailID}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Admin Email ID 1"
                  variant="outlined"
                  type="email"
                  placeholder="Please enter Admin Email ID 1"
                  name="TnT_AdminEmailID1"
                  value={formValues.TnT_AdminEmailID1}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Admin Email ID 2"
                  variant="outlined"
                  type="email"
                  placeholder="Please enter Admin Email ID 2 (Optional)"
                  name="TnT_AdminEmailID2"
                  value={formValues.TnT_AdminEmailID2}
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
        message={"Tenant details added Successfully"}
      />
    </>
  );
};

export default Tenant;
