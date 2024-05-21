// import { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/home/homeComponents/Navigation/Navbar";
import About from "./pages/about/About";
import Wedding from "./pages/wedding/Wedding";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/wedding" element={<Wedding />} />
      </Routes>
    </>
  );
}

export default App;
