import React from "react";
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import Landing from "./components/Landing/Landing";

import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
 
        <Route path="/" element={<Landing/>} />
        <Route path="/words" element={<Body/>}/>
      </Routes>
    </>
  );
}

export default App;
