import React from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

type themeProps = {
    children: JSX.Element;
};

export enum themePalette {
    BG_PRIMARY = '#15202b',
    BG_SECONDARY = '#192734',

    PRIMARY = '#2196f3',
    PRIMARY_LIGHT = '#6ec6ff',
    PRIMARY_DARK = '#0069c0',
    PRIMARY_TEXT = '#000000',

    SECONDARY = '#fbc02d',
    SECONDARY_LIGHT = '#fff263',
    SECONDARY_DARK = '#c49000',
    SECONDARY_TEXT = '#000000',

    //BUTTONS
    BUTTON_CONTAINED = '#fff',

    // CUSTOM WALMART COLORS
    COLORS_DARKBLUE = '#041e42',
    COLORS_SKYBLUE = '#041e42',

    // Alert styles
    ERROR_MAIN = '#f44336',
    ERROR_BG = '#ff978f',
    SUCCESS_MAIN = '#66bb6a',
    SUCCESS_BG = 'rgba(102, 187, 106, 0.1)',

    TEXT_PRIMARY = '#fff',
    TEXT_SECONDARY = '#373e44',

    BORDER = 'rgb(56, 68, 77)',
}

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: themePalette.BG_PRIMARY,
            paper: themePalette.BG_SECONDARY,
        },
        primary: {
            main: themePalette.PRIMARY,
            light: themePalette.PRIMARY_LIGHT,
            dark: themePalette.PRIMARY_DARK,
            contrastText: themePalette.PRIMARY_TEXT,
        },
        secondary: {
            main: themePalette.SECONDARY,
            light: themePalette.SECONDARY_LIGHT,
            dark: themePalette.SECONDARY_DARK,
            contrastText: themePalette.SECONDARY_TEXT,
        },
        text: {
            primary: themePalette.TEXT_PRIMARY,
            secondary: themePalette.TEXT_SECONDARY,
        },
        walmartColors: {
            darkblue: themePalette.COLORS_DARKBLUE,
            skyblue: themePalette.COLORS_SKYBLUE,
        },
    },
    components: {
        MuiTextField: {
            defaultProps: {
                size: 'small',
                variant: 'outlined',
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    border: `1px solid ${themePalette.BORDER}`,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    boxShadow: 'none',
                },
                contained: {
                    color: themePalette.BUTTON_CONTAINED,
                },
            },
            defaultProps: {
                variant: 'contained',
            },
        },
        MuiInput: {
            defaultProps: {
                size: 'small',
            },
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    fontSize: '1em',
                },
                standardError: {
                    border: `1px solid ${themePalette.ERROR_MAIN}`,
                },
                standardSuccess: {
                    border: `1px solid ${themePalette.SUCCESS_MAIN}`,
                },
            },
        },
    },
});

export const ThemeConfig: React.FC<themeProps> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
