import { useCallback } from 'react';
import React from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { type Engine } from 'tsparticles-engine';
import { useTheme } from '@mui/material';

const AppParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const theme = useTheme();

  return (
    <Particles
      id="tsparticles"
      // Init={particlesInit}
      style={{
        position: 'absolute',
        backgroundColor: '#323031',
        backgroundImage: 'url("")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
      }}
      options={{
        detectRetina: false,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: false,
              mode: 'push',
            },
            onDiv: {
              elementId: 'repulse-div',
              enable: false,
              mode: 'repulse',
            },
            onHover: {
              enable: true,
              mode: 'bubble',
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 40,
              duration: 2,
              opacity: 8,
              size: 6,
              speed: 3,
            },
            connect: {
              distance: 80,
              lineLinked: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1,
              },
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            slow: {
              active: false,
              radius: 0,
              factor: 1,
            },
          },
        },
        particles: {
          color: {
            value: [
              theme.palette.primary.main,
              theme.palette.error.light,
              theme.palette.success.main,
              theme.palette.warning.dark,
            ],
          },
          lineLinked: {
            blink: false,
            color: 'random',
            consent: false,
            distance: 40,
            enable: true,
            opacity: 0.8,
            width: 1,
          },
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            bounce: false,
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: false,
              area: 2000,
            },
            limit: 0,
            value: 200,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.3,
              speed: 2,
              sync: false,
            },
            random: false,
            value: 0.8,
          },
          shape: {
            character: {
              fill: false,
              font: 'Verdana',
              style: '',
              value: '*',
              weight: '400',
            },
            image: {
              height: 100,
              replaceColor: true,
              src: 'https://particles.js.org/images/github.svg',
              width: 100,
            },
            polygon: {
              sides: 5,
            },
            stroke: {
              color: '#000000',
              width: 0,
            },
            type: 'circle',
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: false,
            },
            random: true,
            value: 1,
          },
        },
        polygon: {
          draw: {
            enable: false,
            lineColor: 'rgba(255,255,255,0.2)',
            lineWidth: 0.5,
          },
          enable: true,
          move: {
            radius: 5,
          },
          position: {
            x: 30,
            y: 10,
          },
          inlineArrangement: 'equidistant',
          scale: 0.8,
          type: 'inline',
          url: 'https://particles.js.org/images/google.svg',
        },
        // Background: {
        //   color: '#000000',
        //   image: '',
        //   position: '50% 50%',
        //   repeat: 'no-repeat',
        //   size: 'cover',
        // },
      }}
    />
  );
};

export default AppParticles;
