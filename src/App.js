import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/Contact/Contact";
import Exchange from "./components/Exchange/Exchange";
import Home from "./components/home/Home";

import Tourisme from "./components/Tourisme/Tourisme";
import Transport from "./components/Transport/Transport";
import PageReservation from "./components/Transport/Reservation/PageReservation";

function App() {
  return (
    <Routes>
    
      <Route path="/" element={ <Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/pageReservation" element={<PageReservation/>}/>
      <Route path="/tourisme" element={<Tourisme/>}/>
      <Route path="/exchange" element={<Exchange/>}/>
      <Route path="/transport" element={<Transport/>}/>
      
    </Routes>
    
  );
}

export default App;
