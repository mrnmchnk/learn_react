import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import About from "./pages/About";
import Error from "./pages/Error";
import Posts from "./pages/Posts";
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <AppRouter/>
    </Router>
  )
}

export default App;

// {/* <Routes>
//           <Route path="/about">
//           </Route>
//         </Routes> */}
//         <Route path="/about">
//         </Route>