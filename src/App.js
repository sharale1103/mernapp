import './App.css';
import Home from "./screen/Home";
import Login from "./screem/Login"
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";



function App() {
  return (
    <Router>
    <div>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/" element={<Login/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
