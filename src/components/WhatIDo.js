/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { useTheme } from '@mui/material';
import { useViewportScroll } from 'framer-motion';
import React, { useRef, useState } from 'react';

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

const IMAGECOUNT = 80;

function WhatIDo() {
  const theme = useTheme();
  const ref = useRef();
  const { scrollY } = useViewportScroll();
  const [imageNO, setImageNO] = useState(0);

  scrollY.onChange((value) => {
    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offsetStart = rect.top + scrollTop;
    const offsetEnd = offsetStart + rect.height;
    if (value >= offsetStart / 2 && value <= offsetEnd) {
      const totalLenghth = offsetEnd - offsetStart;
      const scrollPercentage = (value - offsetStart / 2) / totalLenghth;
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
      <div
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
      </div>
    </div>
  );
}

export default WhatIDo;
