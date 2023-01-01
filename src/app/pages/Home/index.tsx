import { Grid, Typography, Stack } from '@mui/material';
import React from 'react';
import NeonText from '../../components/NeonText';
import Page from '../../components/Page';
import MyAvatar from './Avatar';
import Bulb from './Bulb';

function Home() {
  return (
    <Page>
      <Grid container>
        <Stack>
          <MyAvatar />
          <NeonText variant="h1" glowColor="#020005">
            Teja Chundru
          </NeonText>
        </Stack>
        <Bulb />
      </Grid>
    </Page>
  );
}

export default Home;
