import React from 'react';
import { Typography, Grid, useTheme } from '@mui/material';
import Teja from './TejaName';
// import Developer from './developer';
import WhatIDo from './WhatIDo';

function Home() {
  const theme = useTheme();
  return (
    <>
      <div
        style={{
          flex: 1,
          backgroundColor: theme.palette.primary.light,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Grid container flexDirection="row">
          <Grid container flexDirection="row">
            <Typography
              variant="h1"
              sx={{
                color: '#fff',
              }}
            >
              Hi I&apos;m
            </Typography>
            <Teja />
          </Grid>
        </Grid>
        {/* <Developer /> */}
      </div>
      <WhatIDo />
    </>
  );
}

export default Home;
