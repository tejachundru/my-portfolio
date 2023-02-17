import { Grid, Typography, Stack, useTheme, Box, styled } from '@mui/material';
import React from 'react';
import DetailShowCase from '../../components/DetailShowCase';
// Import AppParticles from '../../components/AppParticles';
import NeonText from '../../components/NeonText';
import Page from '../../components/Page';
import MyAvatar from './components/Avatar';
// Import Bulb from './components/Bulb';
import { myData } from './details';
import { type GlowTypes } from './types';

const OnHoverEmoji = styled(Typography)({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '&:hover': {
    opacity: 1,
    display: 'inline',
  },
  opacity: 0,
  fontSize: '2rem',
});

function Home() {
  const theme = useTheme();
  // GlowPrimaryColor and glowSecondaryColor are the same for all the components ,to make animation and glow consistent
  const commonProps: GlowTypes = {
    glowPrimaryColor: theme.palette.primary.main,
    glowSecondaryColor: theme.palette.primary.dark,
  };

  return (
    <Page>
      {/* <AppParticles></AppParticles> */}
      {/* <Bulb {...commonProps} /> */}
      <Grid container alignItems={'center'} justifyContent={'center'}>
        <Grid item>
          <Stack direction={'row'} alignItems="center">
            <MyAvatar {...commonProps} />
            <Box>
              <NeonText variant="h3" color="white" {...commonProps}>
                Hi, I am
              </NeonText>
              <NeonText variant="h1" {...commonProps}>
                TEJA CHUNDRU
              </NeonText>
            </Box>
          </Stack>
        </Grid>
        <Grid item>
          {myData.map(data => (
            <Box key={data.key}>
              <DetailShowCase detail={data} />
              <br />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Page>
  );
}

export default Home;
