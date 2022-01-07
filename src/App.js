// import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Particles from 'react-tsparticles';
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
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          particles: {
            color: {
              value: '#fffff3f',
            },
            links: {
              color: '#00ff3420',
              distance: 100,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 10,
            },
          },
          detectRetina: true,
        }}
      />
    </ThemeConfig>
  );
}

export default App;
