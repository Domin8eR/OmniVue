import './App.css';
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Login';
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged
import { auth } from './firebase.config';
import Login from './components/Login';
import Admin from './components/Admin';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
  return (
    <>
      <Router>
        {/* <Navbar isLoggedIn={isLoggedIn} /> */}
        <div>
          <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/boards" element={<Home />} />
          <Route exact path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
