/* eslint-disable @typescript-eslint/naming-convention */
import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function createGradient(color1: string, color2: string): string {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

type GreyOptions = {
  0: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  500_8: string;
  500_12: string;
  500_16: string;
  500_24: string;
  500_32: string;
  500_48: string;
  500_56: string;
  500_80: string;
};

type ColorOptions = {
  contrastText?: string;
  light: string;
  main: string;
  dark: string;
};

type GradientOptions = {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
};

type ActionsOptions = {
  hover: string;
  selected: string;
  disabled: string;
  disabledBackground: string;
  focus: string;
  hoverOpacity: number;
  disabledOpacity: number;
};

type CommonOptions = {
  common: {
    black: string;
    white: string;
  };
  primary: ColorOptions;
  secondary: ColorOptions;
  info: ColorOptions;
  success: ColorOptions;
  warning: ColorOptions;
  error: ColorOptions;
  grey: GreyOptions;
  gradients: GradientOptions;
  divider: string;
  action: ActionsOptions;
};

export enum ThemeVariant {
  LIGHT = 'light',
  DARK = 'dark',
}
type TextColorVariantOptions = {
  primary: string;
  secondary: string;
  disabled: string;
};

type BackgroundVariantOptions = {
  default: string;
  paper: string;
  neutral: string;
};

export type PalletteOptionsVariant = CommonOptions & {
  mode: ThemeVariant;
  text: TextColorVariantOptions;
  background: BackgroundVariantOptions;
  action: ActionsOptions & {
    active: string;
  };
};

// SETUP COLORS
const GREY: GreyOptions = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};
const PRIMARY: ColorOptions = {
  light: '#76B0F1',
  main: '#2458EE',
  dark: '#103996',
};
const SECONDARY: ColorOptions = {
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
};
const INFO: ColorOptions = {
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
};

const SUCCESS: ColorOptions = {
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
};

const WARNING: ColorOptions = {
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
};

const ERROR: ColorOptions = {
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
};

const GRADIENTS: GradientOptions = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const COMMON: CommonOptions = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY, contrastText: '#fff' },
  secondary: { ...SECONDARY, contrastText: '#fff' },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: '#fff' },
  grey: GREY,
  gradients: GRADIENTS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export type PalletteOptionsType = {
  light: PalletteOptionsVariant;
  dark: PalletteOptionsVariant;
};

const palette: PalletteOptionsType = {
  light: {
    ...COMMON,
    mode: ThemeVariant.LIGHT,
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: ThemeVariant.DARK,
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
    background: {
      paper: GREY[800],
      default: COMMON.common.black,
      neutral: GREY[500_16],
    },
    action: { active: GREY[500], ...COMMON.action },
  },
};

export default palette;
