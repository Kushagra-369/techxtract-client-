import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import Team from './Components/Team/Team';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}
