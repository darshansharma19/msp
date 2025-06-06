import React, { useState } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import  Films  from "./components/Films";
import Books from "./components/Books";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
}

export default App;
