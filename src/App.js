import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="navbar">
        <div className="navbar__links">
          <Link to="/about">About<br/></Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
      <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path="/posts" element={<Posts />}></Route>
      </Routes>
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