import React from "react";
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
// import WebFont from "webfontloader";
import Header from './Components/layout/Header/Header';
import Footer from './Components/layout/Footer/Footer';
import Home from "./Components/Home/Home";


function App() {
  
  return ( 
    <Router>
      <Header/>
      <Route exact path="/" component= {Home}/>
      <Footer/>
    </Router>
    
  );
}

export default App;
