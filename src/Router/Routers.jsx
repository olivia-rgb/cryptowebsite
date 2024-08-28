import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Spot from "../pages/Spot";
import AIBots from "../pages/AIBots";
import P2p from "../pages/P2p";
import Contact from "../pages/Contact";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/spot" element={<Spot />} />
      <Route path="/bot" element={<AIBots />} />
      <Route path="/p2p" element={<P2p />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;