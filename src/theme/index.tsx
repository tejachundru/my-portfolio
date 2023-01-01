import React, { useMemo } from 'react';
// Material
import { CssBaseline } from '@mui/material';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
import { useSelector } from 'react-redux';
import palette, { type PalletteOptionsVariant } from './palette';
import typography from './typography';
import shadows, { customShadows } from './shadows';
import { type RootState } from '../store/reducers';
// Import { useSelector } from 'react-redux';

// ----------------------------------------------------------------------
type ThemeProviderProps = {
  children: React.ReactNode;
};

declare module '@mui/material/styles' {
  type Theme = {
    customShadows: typeof customShadows;
  };
  type Palette = {
    mode: 'light' | 'dark';
  } & PalletteOptionsVariant;
}
export default function ThemeProvider({ children }: ThemeProviderProps) {
  const colorScheme = useSelector(
    (state: RootState) => state.colorScheme.colorMode,
  );
  const isLight = colorScheme === 'light'; // We can manage this from the redux store
  const themeOptions: any = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      shadows,
      customShadows,
    }),
    [isLight],
  );

  const theme = createTheme(themeOptions);
  //   Theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
