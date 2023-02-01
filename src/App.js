import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/home/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/about" element={<Contact/>}/>
      <Route/>

    </Routes>
    
  );
}

export default App;
