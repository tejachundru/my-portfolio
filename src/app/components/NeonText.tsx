// Add neon glow to text
import React from 'react';
import { Typography, type TypographyProps } from '@mui/material';

type NeonTextProps = {
  children: React.ReactNode;
  // Should be a hex color
  glowColor: string;
} & TypographyProps;

const NeonText = ({
  children,
  glowColor = '#bc13fe',
  ...rest
}: NeonTextProps) => (
  <Typography
    {...rest}
    sx={{
      color: 'white',
      textShadow:
        `0 0 7px #fff,` +
        `0 0 21px ${glowColor},` +
        `0 0 42px ${glowColor},` +
        `0 0 82px ${glowColor},` +
        `0 0 151px ${glowColor}`,
    }}
  >
    {children}
  </Typography>
);

export default NeonText;
