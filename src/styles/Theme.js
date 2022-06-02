import React from 'react';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      light: "#8a96b2",
      main: "#697083",
      dark: "#171e2d",
    },
    secondary: {
      light: "#f184a3",
      main: "#bc5474",
      dark: "#892449",
    },
    typography: {
      fontFamily: 'Poppins',
    },
  },
});

export const Theme = () => {
  return (<></>)
};
