// import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
// import Particles from 'react-tsparticles';
import ThemeConfig from './theme';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <ThemeConfig>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </ThemeConfig>
  );
}

export default App;
