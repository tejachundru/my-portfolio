/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { Grid, Typography, useTheme } from '@mui/material';
import { useViewportScroll } from 'framer-motion';
import React, { useRef, useState } from 'react';

import Typewriter from 'typewriter-effect';

const IMAGE_COUNT = 80;

const TEXT_BLOCKS = [
  'I am a Full Stack Developer',
  'Can Work on ',
  'Frontend - Web and Mobile Apps',
  'Backend- Api development',
];

const PERCENT_MAP_RANGE = [
  {
    start: 0,
    end: 25,
  },
  {
    start: 25,
    end: 45,
  },
  {
    start: 45,
    end: 60,
  },
  {
    start: 60,
    end: 80,
  },
];

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
      const totalLength = offsetEnd - offsetStart;
      const scrollPercentage = (value - offsetStart / 2) / totalLength;
      setPercentage(scrollPercentage * 100);
      setImageNO(Math.floor(scrollPercentage * IMAGE_COUNT));
    }
  });

  return (
    <div
      ref={ref}
      style={{
        height: '500vh',
        background: theme.palette.gradients.primary,
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
          {TEXT_BLOCKS.map(
            (text, index) =>
              percentage &&
              percentage > PERCENT_MAP_RANGE[index].start && (
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: theme.typography.fontWeightRegular,
                  }}
                >
                  {percentage < PERCENT_MAP_RANGE[index].end ? (
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter.typeString(text).start();
                      }}
                    />
                  ) : (
                    text
                  )}
                </Typography>
              )
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default WhatIDo;
