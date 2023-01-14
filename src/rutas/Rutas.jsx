import React from "react";
import { Routes, Route } from "react-router-dom";
import { FullProjectView } from "../components/FullProjectView/FullProjectView";
import ViewProject from "../components/ViewProject/ViewProject";
import Aboutme from "../layout/Aboutme/Aboutme";
import Contact from "../layout/Contact/Contact";
import Home from "../layout/Home/Home";
import Projects from "../layout/MyProjects/Projects";

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/aboutme" element={<Aboutme />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/project/:id" element={<FullProjectView />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}

export default Rutas;
