import { Grid, Typography, Stack, useTheme, Box, styled } from '@mui/material';
import React from 'react';
import { type DetailType } from '../pages/Home/details';
import { type GlowTypes } from '../pages/Home/types';
// Import AppParticles from '../../components/AppParticles';
import NeonText from './NeonText';

const OnHoverTypography = styled(NeonText)({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '&:hover': {
    opacity: 1,
    display: 'inline',
    transform: 'scale(1.5)',
  },
  opacity: 0,
  fontSize: '1rem',
});

function DetailShowCase({ detail }: { detail: DetailType }) {
  const theme = useTheme();
  // GlowPrimaryColor and glowSecondaryColor are the same for all the components ,to make animation and glow consistent
  const commonProps: GlowTypes = {
    glowPrimaryColor: theme.palette.primary.main,
    glowSecondaryColor: theme.palette.primary.dark,
  };

  return (
    <Box>
      <Typography variant="body1" color="primary.light">
        {detail.key}
      </Typography>
      <Stack direction={'row'} alignItems="center" spacing={0.5}>
        <OnHoverTypography variant="h4" color="white" {...commonProps}>
          {detail.emoji}
        </OnHoverTypography>
        <Typography variant="h1">{detail.value}</Typography>
      </Stack>
    </Box>
  );
}

export default DetailShowCase;
