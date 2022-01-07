import { Typography, Box, Toolbar } from '@mui/material';
import React from 'react';
import AppBar from '@mui/material/AppBar';

function Name() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar />
        </AppBar>
      </Box>
      <Typography variant="h2">Teja Chundru</Typography>
    </>
  );
}

export default Name;
