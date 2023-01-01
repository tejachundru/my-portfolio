// --------------- Swinging Bulb --------------- //

import React from 'react';
import { Box } from '@mui/material';
import './Bulb.css';
import { styled, keyframes, type Theme } from '@mui/material/styles';
import { type GlowTypes } from './types';

const bulbShadow = (
  glowPrimaryColor: string,
  glowSecondaryColor: string,
) => keyframes`
  from {
    box-shadow: 0px 0px 500px 77px ${glowPrimaryColor};
    transform: rotate(3deg);

  }
  to {
    box-shadow: 0px 0px 500px 77px ${glowSecondaryColor};
    transform: rotate(-3deg);
  }
`;

const BulbShape = styled('div')(
  ({ glowPrimaryColor, glowSecondaryColor }: GlowTypes) => ({
    position: 'relative',
    width: '40px',
    height: '40px',
    left: '80px',
    bottom: '2px',
    zIndex: -1,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '50%',
    animation: `${bulbShadow(
      glowPrimaryColor,
      glowSecondaryColor,
    )} 1s ease-in-out infinite alternate`,
  }),
);

// Bulb area
const swing = keyframes`
  from {
    transform: rotate(8deg);
  }
  to {
    transform: rotate(-18deg);
  }
`;
const BulbArea = styled('div')({
  animation: `${swing} 1s infinite ease-in-out alternate`,
  transformOrigin: 'top',
  MozTransformOrigin: 'top',
  WebkitTransformOrigin: 'top',
});

const Bulb = ({
  glowPrimaryColor,
  glowSecondaryColor,
}: {
  glowPrimaryColor: string;
  glowSecondaryColor: string;
}) => (
  <Box
    sx={{
      position: 'absolute',
    }}
  >
    <BulbArea>
      <div className="wire"></div>
      <div className="fixture"></div>
      <BulbShape
        glowPrimaryColor={glowPrimaryColor}
        glowSecondaryColor={glowSecondaryColor}
      >
        <div className="filament"></div>
        <div className="filament"></div>
        <div className="filament"></div>
      </BulbShape>
    </BulbArea>
  </Box>
);

export default Bulb;
