// --------------- Swinging Bulb --------------- //

import React from 'react';
import { Box, Typography } from '@mui/material';
import './Bulb.css';

const Bulb = () => (
  <Box
    sx={{
      display: 'flex',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div className="area">
      <div className="wire"></div>
      <div className="fixture"></div>
      <div className="bulb">
        <div className="zig"></div>
        <div className="zig"></div>
        <div className="zig"></div>
      </div>
    </div>
  </Box>
);

export default Bulb;
