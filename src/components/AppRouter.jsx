import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate,  } from "react-router-dom";
import { AuthContext } from '../context';
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from '../pages/PostIdPage';
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from '../router/routes';
import Loader from './UI/Loader/Loader';


const AppRouter = () => {
  const {isAuth, setIsAuth, isLoading} = useContext(AuthContext);
  console.log(isAuth);

  if (isLoading) {
    return <Loader/>
  }

  return (
    isAuth
    ?
    <Routes>
      {privateRoutes.map( route => 
        <Route 
          element={route.component} 
          path={route.path} 
          exact={route.exact} 
          key={route.path}          
          />
      )}
      <Route path="/login" element={<Navigate replace to="/posts" />} />
    </Routes>
    :
    <Routes>
      {publicRoutes.map( route => 
        <Route 
          element={route.component} 
          path={route.path} 
          exact={route.exact} 
          key={route.path}              
          />  
      )}
      <Route path="/*" element={<Navigate replace to="/login" />} />
    </Routes>
  )
}


export default AppRouter;



// <Route path='/about' element={<About/>}></Route>
// <Route exact path="/posts" element={<Posts />}></Route>
// <Route exact path="/posts/:id" element={<PostIdPage />}></Route>