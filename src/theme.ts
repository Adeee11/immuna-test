import { createTheme } from "@mui/material";

declare module "@mui/material" {
    interface LeftMenu {
        width: string;
    }
    interface Navigation {
        height: string;
    }
    interface ColorTypes {
        primary0?: string;
        primary1?: string;
        primary2?: string;
        primary3?: string;
        primary4?: string;
        primary5?: string;
        primary6?: string;
        primary7?: string;
        primary8?: string;
        primary9?: string;
        primary10?: string;
        primary11?: string;
        primary12?: string;
        primary13?: string;
    }
    interface Colors {
        blue: ColorTypes;
        grey: ColorTypes;
        // green: ColorTypes;
        // red: ColorTypes;
        // yellow: ColorTypes;
    }
    export interface Theme {
        leftMenu: LeftMenu;
        navigation: Navigation;
        colors: Colors;
    }
    export interface ThemeOptions {
        leftMenu: LeftMenu;
        navigation: Navigation;
        colors: Colors;
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
    colors: {
        blue: {
            primary0: "#f8f8f8",
            primary1: "#ebefff",
            primary2: "#d7e0fe",
            primary3: "#9bb0fd",

            primary4: "#5f81fc",
            primary5: "#3861fb",
            primary6: "#0f42fa",
            primary7: "#0433dc",
            primary8: "#0325a0",
            primary9: "#CBE1FF",
            primary10: "#e0eeff",
            primary11: "#efefef",
            primary12: "#E6F0FF",
        },
        grey: {
            primary0: "#F3F3F3",
            primary1: "#F5F5F5",
            primary2: "#5C5C5C",
            primary3: "#2F2F2F",
            primary4: "#272727",
            primary5: "#707070",
            primary6: "#383838",
            primary7: "#6c6c6c",
            primary8: "#999999",
            primary9: "#dcdcdc",
            primary10: "#9b9b9b",
            primary11: "#e0e7ed",
            primary12: "#f4f9ff",
            primary13: "#f7fbff",
        },
    },
});
