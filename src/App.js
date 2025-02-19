import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/style/index.scss';

import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/qcm" element={<Main/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
