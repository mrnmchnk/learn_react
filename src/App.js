import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import BtnGroup from "./components/BtnGroup";
import Carousel from "./components/Carousel";
import DefinitionsList from "./components/DefinitionsList";
import ListGroup from "./components/ListGroup";
import Progress from "./components/Progress";
import Navbar from "./components/UI/Navbar/Navbar";
import { AuthContext } from "./context";
import About from "./pages/About";
import Error from "./pages/Error";
import Posts from "./pages/Posts";
import './styles/App.css';


function App() {
  // const [isAuth, setIsAuth] = useState(false);
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   if ( localStorage.getItem('auth') ) {
  //     setIsAuth(true);
  //   }
  //   setLoading(false);
  // }, [])

  // return (
  //   <AuthContext.Provider value={{
  //     isAuth,
  //     setIsAuth,
  //     isLoading,
  //   }} >
  //     <Router>
  //       <Navbar/>
  //       <AppRouter/>
  //     </Router>
  //   </AuthContext.Provider>
  // )

  return (
    <Carousel />
  )


}


export default App;


// return (
//   <ListGroup>
//     <p>one</p>
//     <p>two</p>
//   </ListGroup>
// )




// const definitions = [
//   { dt: 'one', dd: 'two', id: 1 },
//   { dt: 'another term', dd: 'another description', id: 2 },
// ];

// return (
//   <DefinitionsList data={definitions} />
// )

