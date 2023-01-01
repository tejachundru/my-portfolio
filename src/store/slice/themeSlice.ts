import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export enum ColorMode {
  light = 'light',
  dark = 'dark',
}

export type ThemeState = {
  colorMode: ColorMode.dark | ColorMode.light;
};

export const initialState: ThemeState = {
  colorMode: ColorMode.dark,
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeColorScheme(
      state,
      action: PayloadAction<ColorMode.dark | ColorMode.light>,
    ) {
      state.colorMode = action.payload;
    },
    toggleColorScheme(state) {
      state.colorMode =
        state.colorMode === ColorMode.light ? ColorMode.dark : ColorMode.light;
    },
  },
});

export const { actions: themeActions, reducer } = slice;

export const useThemeSlice = () => ({ actions: slice.actions });

export default slice.reducer;
