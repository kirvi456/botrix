import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        walmartColors: {
            darkblue: string;
            skyblue: string;
        };
    }

    interface PaletteOptions {
        walmartColors?: {
            darkblue?: string;
            skyblue?: string;
        };
    }
}
