import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="navbar__links">
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
      {/* ЗАМЕНИТЬ PATH НА TO И ВСЕ ПЕРЕСТАНЕТ РАБОТАТЬ */}
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route to="/posts" element={<Posts />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

// {/* <Routes>
//           <Route path="/about">
//           </Route>
//         </Routes> */}
//         <Route path="/about">
//         </Route>