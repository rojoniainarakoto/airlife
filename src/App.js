import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/Contact/Contact";
import Exchange from "./components/Exchange/Exchange";
import Home from "./components/home/Home";

import Tourisme from "./components/Tourisme/Tourisme";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import PageReservation from "./components/Transport/Reservation/PageReservation";
import { Liste } from "./components/Transport/Liste/Liste";
import Reserve from "./components/Transport/Reservation/Reserve";
import HomeConnecte from "./components/home/HomeConnecte";

function App() {
  return (
    <Routes>
    
      <Route path="/" element={ <Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/reservation" element={<PageReservation/>}/>
      <Route path="/tourisme" element={<Tourisme/>}/>
      <Route path="/exchange" element={<Exchange/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/list" element={<Liste/>}/>
      <Route path="/reserve" element={<Reserve/>}/>
      <Route path="/hone" element={<HomeConnecte/>}/>
      
    </Routes>
    
  );
}

export default App;
