import './auth.css';
import { useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase.config.js';
import { Link, useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import board from "../assets/images/work.svg";
import "./styles/style.css";
import slider from "../assets/images/slider.gif";
import logo from "../assets/images/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {
        const { displayName, email } = result;
        setUserData({ displayName, email });
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const SignUpUsingGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        setUserData({ displayName, email });
        // toast.success("Welcome " + displayName);
        setOpenSnackbar(true);
        setTimeout(() => {
          setIsLoggedIn(true);
          navigate('/boards');
        }, 3000); // Delay the navigation for 3000 milliseconds (3 seconds)
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const Logout = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <>
    

    <div className="sign-up-mode">
        <img src={logo} className="logo" alt="logo" />
        <div className="forms-container">
          <div className="signinForm">
            <form>
              <img src={slider} alt="slider" className="slider" />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-container">
            <div className="content">
              <h3>Visualize your work with OmniVue</h3>
              <p>
                Login with your gmail id and start using OmniVue for better
                experience!
              </p>
              <div className="App">
      <div className="logginPage"></div>
      {!isLoggedIn && (
        <button
          onClick={SignUpUsingGoogle}
          type="button"
          className="login-with-google-btn googleloggin"
          style={{ backgroundColor: "#8F00FF", color: "#fff" }}
        >
          Login With Google
        </button>
      )}

      {isLoggedIn && (
        <div className="wrapper">
          {/* Your profile card or other content */}
        </div>
      )}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={`Welcome ${userData.displayName || userData.email}`}
      />
    </div>
            </div>
            
            <img src={board} className="image" />
            
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

