import React from 'react';
import { Typography } from '@mui/material';
import Teja from './TejaName';
// import Background from './background';

function Home() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        backgroundColor: '#020200',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: '#fff',
        }}
      >
        Hi I&apos;m
      </Typography>
      <Teja />
      {/* <Background /> */}
    </div>
  );
}

export default Home;
