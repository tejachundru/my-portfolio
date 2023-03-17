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
import {
  motion,
  type MotionValue,
  useScroll,
  type Variants,
} from 'framer-motion';

function useParallax(value: MotionValue<number>, distance: number) {}

const OnHoverEmoji = styled(Typography)({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  '&:hover': {
    opacity: 1,
    display: 'inline',
  },
  opacity: 0,
  fontSize: '2rem',
});

// Const scaleX = useSpring(scrollYProgress, {
//   stiffness: 100,
//   damping: 30,
//   restDelta: 0.001,
// });

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
          {myData.map((data, index) => (
            <motion.div
              key={data.key}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              onViewportLeave={() => {
                console.log('left');
              }}
            >
              <Box>
                <motion.div
                  className="card"
                  key={data.key}
                  variants={{
                    offscreen: {
                      opacity: 0,
                      x:
                        Math.random() > 0.5
                          ? -Math.floor(Math.random() * 400) - 400
                          : Math.floor(Math.random() * 200) + 600,
                    },
                    onscreen: {
                      opacity: 1,
                      x: 0,
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: Math.random() * 0.5 + 1,
                    ease: 'easeInOut',
                  }}
                >
                  <DetailShowCase detail={data} />
                  <br />
                </motion.div>
              </Box>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </Page>
  );
}

export default Home;
