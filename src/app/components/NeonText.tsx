// Add neon glow to text
import React from 'react';
import { keyframes, Typography, type TypographyProps } from '@mui/material';

type NeonTextProps = {
  children: React.ReactNode;
  // Should be a hex color
  glowPrimaryColor: string;
  glowSecondaryColor: string;
} & TypographyProps;

const textShadow = (glowColor: string, glowSecondaryColor: string) =>
  keyframes`
  from {
    text-shadow: 0 0 7px #fff, 0 0 21px ${glowColor}, 0 0 42px ${glowColor}, 0 0 82px ${glowColor}, 0 0 151px ${glowColor};
  }
  to {
    text-shadow: 0 0 7px #fff, 0 0 21px ${glowSecondaryColor}, 0 0 42px ${glowSecondaryColor}, 0 0 82px ${glowSecondaryColor}, 0 0 151px ${glowSecondaryColor};
  }
`;

const NeonText = ({
  children,
  glowPrimaryColor,
  glowSecondaryColor,
  ...rest
}: NeonTextProps) => (
  <Typography
    {...rest}
    sx={{
      color: theme => theme.palette.text.primary,
      animation: `${textShadow(
        glowPrimaryColor,
        glowSecondaryColor,
      )} 1s ease-in-out infinite alternate`,
    }}
  >
    {children}
  </Typography>
);

export default NeonText;
