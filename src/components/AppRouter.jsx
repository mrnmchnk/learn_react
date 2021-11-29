import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, Redirect } from "react-router-dom";
import { AuthContext } from '../context';
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from '../pages/PostIdPage';
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from '../router/routes';


const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  console.log(isAuth);
  return (
    isAuth
    ?
    <Routes>
      {privateRoutes.map( route => 
        <Route element={route.component} path={route.path} exact={route.exact} />  
      )}
      {/* <Navigate to='/posts' /> */}
    </Routes>
    :
    <Routes>
      {publicRoutes.map( route => 
        <Route element={route.component} path={route.path} exact={route.exact} />  
      )}
      {/* <Navigate to='/login' /> */}
    </Routes>
  )
}


export default AppRouter;



// <Route path='/about' element={<About/>}></Route>
// <Route exact path="/posts" element={<Posts />}></Route>
// <Route exact path="/posts/:id" element={<PostIdPage />}></Route>