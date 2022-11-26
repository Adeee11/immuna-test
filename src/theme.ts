import { createTheme } from "@mui/material";

declare module "@mui/material" {
    export interface Theme {
        leftMenu: {
            width: string;
        };
        navigation: {
            height: string;
        };
    }
    export interface ThemeOptions {
        leftMenu: {
            width: string;
        };
        navigation: {
            height: string;
        };
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            main: "#1D7DEA",
        },
    },
    typography: {
        fontFamily: [
            "Inter",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
    navigation: {
        height: `65px`,
    },
    leftMenu: {
        width: `268px`,
    },
});
