import './App.css';
import Home from "./screen/Home";
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
      </Routes>
    </div>
    </Router>
  );
}

export default App;
