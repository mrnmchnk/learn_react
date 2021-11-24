import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
        {/* <Routes>
          <Route path="/about">
          </Route>
        </Routes> */}
        <Link to="/about">About</Link>
          <Routes>
          <Route path="/about">
            <React.Fragment/>
            <About />
          </Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App;
