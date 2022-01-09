/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { Grid, Typography, useTheme } from '@mui/material';
import { useViewportScroll } from 'framer-motion';
import React, { useRef, useState } from 'react';

import Typewriter from 'typewriter-effect';

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

const IMAGECOUNT = 80;

function WhatIDo() {
  const theme = useTheme();
  const ref = useRef();
  const { scrollY } = useViewportScroll();
  const [imageNO, setImageNO] = useState(0);
  const [percentage, setPercentage] = useState(1);

  scrollY.onChange((value) => {
    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetStart = rect.top + scrollTop;
    const offsetEnd = offsetStart + rect.height;
    if (value >= offsetStart / 2 && value <= offsetEnd) {
      const totalLenghth = offsetEnd - offsetStart;
      const scrollPercentage = (value - offsetStart / 2) / totalLenghth;
      setPercentage(scrollPercentage * 100);
      setImageNO(Math.floor(scrollPercentage * IMAGECOUNT));
    }
  });

  return (
    <div
      ref={ref}
      style={{
        height: '500vh',
        background: createGradient(
          theme.palette.primary.light,
          theme.palette.secondary.main
        ),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Grid
        container
        flexDirection="row"
        style={{
          top: 0,
          left: 0,
          position: 'sticky',
        }}
      >
        <img
          src={require(`./fullstack/fullstack-${imageNO + 1}.png`)}
          height="100%"
          width="40%"
          alt="asd"
        />
        <Grid
          sx={{
            marginTop: 10,
          }}
        >
          {percentage && percentage > 10 && (
            <Typography variant="h1">
              {percentage < 25 ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('I am a Full Stack Developer')
                      .start();
                  }}
                />
              ) : (
                'I am a Full Stack Developer'
              )}
            </Typography>
          )}
          {percentage && percentage > 25 && (
            <Typography variant="h2">
              {percentage < 45 ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('I build web applications').start();
                  }}
                />
              ) : (
                'I build web applications'
              )}
            </Typography>
          )}
          {percentage && percentage > 45 && (
            <Typography variant="h2">
              {percentage < 60 ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString('I build mobile apps').start();
                  }}
                />
              ) : (
                'I build mobile apps'
              )}
            </Typography>
          )}
          {percentage && percentage > 60 && (
            <Typography variant="h2">
              {percentage < 80 ? (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('can work with Backend and Frontend')
                      .start();
                  }}
                />
              ) : (
                'can work with Backend and Frontend'
              )}
            </Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default WhatIDo;
