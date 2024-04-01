import './App.css';
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Auth from './components/Login';
import { onAuthStateChanged } from "firebase/auth"; // Import onAuthStateChanged
import { auth } from './firebase.config';
import Login from './components/Login';
import Admin from './components/Admin';
import List from './components/List';
import Project from './components/Project';
import Tenant from './components/Tenant';
import Cards from './components/Cards';
import KanbanBoard from './components/KanbanBoard';


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
          <Route exact path="/list" element={<List />} />
          <Route exact path="/add-project" element={<Project />} />
          <Route exact path="/tenant" element={<Tenant />} />
          <Route exact path="/cards" element={<Cards />} />
          <Route exact path="/view-card" element={<KanbanBoard />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
