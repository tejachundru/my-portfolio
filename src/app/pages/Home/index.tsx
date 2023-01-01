import { Grid, Typography, Stack, useTheme } from '@mui/material';
import React from 'react';
import NeonText from '../../components/NeonText';
import Page from '../../components/Page';
import MyAvatar from './Avatar';
import Bulb from './Bulb';

function Home() {
  const theme = useTheme();
  // GlowPrimaryColor and glowSecondaryColor are the same for all the components ,to make animation consistent
  const commonProps = {
    glowPrimaryColor: theme.palette.error.dark,
    glowSecondaryColor: theme.palette.success.dark,
  };

  return (
    <Page>
      <Bulb {...commonProps} />
      <Grid container mt={2}>
        <Stack>
          <MyAvatar {...commonProps} />
          <div className="clay">
            <NeonText variant="h1" {...commonProps}>
              Teja Chundru
            </NeonText>
          </div>
        </Stack>
      </Grid>
    </Page>
  );
}

export default Home;
