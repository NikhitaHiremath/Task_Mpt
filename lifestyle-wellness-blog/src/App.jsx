import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowBlog from "./pages/ShowBlog";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show" element={<ShowBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
