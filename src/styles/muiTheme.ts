import { createTheme, responsiveFontSizes } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';

type AmpleColorProps = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
};

declare module '@mui/material/styles' {
  interface PaletteColor extends Partial<AmpleColorProps> {}

  interface SimplePaletteColorOptions extends Partial<AmpleColorProps> {}

  interface Palette {
    brand_gray: Pick<AmpleColorProps, 500 | 700 | 300> & {
      foundation: string;
    };
    brand_blue: Pick<AmpleColorProps, 50 | 700>;
  }

  interface PaletteOptions {
    brand_gray?: Pick<AmpleColorProps, 500 | 700 | 300> & {
      foundation: string;
    };
    brand_blue: Pick<AmpleColorProps, 50 | 700>;
  }
}

export const themeOptions: ThemeOptions = {
  typography: {
    allVariants: {
      wordWrap: 'break-word',
      whiteSpace: 'pre-line',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#FF5759',
      light: '#FFF6F6',
      600: '#FF5759',
      50: '#FFF6F6',
    },
    brand_blue: {
      50: '#EFF8FF',
      700: '#175CD3',
    },
    brand_gray: {
      foundation: '#EFEFEF',
      500: '#667085',
      700: '#344054',
      300: '#D0D5DD',
    },
    // "brand-blue": {

    // }
  },
};

export const materialTheme = responsiveFontSizes(createTheme(themeOptions, {}));
