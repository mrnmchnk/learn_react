import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import Posts from "../pages/Posts";


const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route exact path="/">
        </Route>
        </Routes>
    </div>
  )
}


export default AppRouter;