import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import BtnGroup from "./components/learning/BtnGroup";
import Carousel from "./components/learning/Carousel";
import DefinitionsList from "./components/learning/DefinitionsList";
import ListGroup from "./components/ListGroup";
import Progress from "./components/learning/Progress";
import Navbar from "./components/UI/Navbar/Navbar";
import { AuthContext } from "./context";
import About from "./pages/About";
import Error from "./pages/Error";
import Posts from "./pages/Posts";
import './styles/App.css';
import ClassCounter from "./components/learning/ClassCounter";
import GetCard from "./components/learning/GetCard";
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Collapse, Modal } from "react-bootstrap";
import MyCollapse from "./components/learning/MyCollapse";
import MyForm from "./components/learning/MyForm";
import MyTable from "./components/learning/MyTable";
import Log from "./components/learning/Log";
import TodoBox from "./components/learning/TodoBox";
import ModalLearn from "./components/learning/ModalLearn";
import Autocomplete from "./components/learning/Autocomplete";
import Clock from "./components/learning/Clock";



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
  
  const title = "title 1";
  const text = 'collapse me';

  return (
    <>
      {/* <Clock /> */}
      <Carousel />
      <BtnGroup />
      {/* <GetCard title={title} text={text} /> */}
      <Progress percentage={40}/>
      {/* <MyCollapse text={text} opened={true} /> */}
      {/* <MyForm /> */}
      <Log />
      <TodoBox />
      <ModalLearn />
      <Autocomplete />
    </>
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

