import React from 'react'
import Home from './Pages/Home'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Login from './auth/Login'

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
   </Router>
  )
}

export default App