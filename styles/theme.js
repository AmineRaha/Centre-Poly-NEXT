import { createContext, useState, useMemo } from "react";
import {  createTheme } from '@mui/material/styles';

//color design tokens

export const tokens = (mode) =>({
    ...(mode==='dark'
        ?{
            grey: {
                100: "#e0e0e0",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414"
            },
            primary: {
                100: "#fce3d4",
                200: "#f9c6a9",
                300: "#f6aa7d",
                400: "#f38d52",
                500: "#f07127",
                600: "#c05a1f",
                700: "#904417",
                800: "#602d10",
                900: "#301708"
            },
            blueAccent: {
                100: "#d4edfc",
                200: "#a9dbf9",
                300: "#7dcaf6",
                400: "#52b8f3",
                500: "#27a6f0",
                600: "#1f85c0",
                700: "#176490",
                800: "#104260",
                900: "#082130"
            },
            redAccent: {
                100: "#fcd4d9",
                200: "#f9a9b3",
                300: "#f67d8e",
                400: "#f35268",
                500: "#f02742",
                600: "#c01f35",
                700: "#901728",
                800: "#60101a",
                900: "#30080d"
            },
            yellowAccent: {
                100: "#fcf7d4",
                200: "#f9eea9",
                300: "#f6e67d",
                400: "#f3dd52",
                500: "#f0d527",
                600: "#c0aa1f",
                700: "#908017",
                800: "#605510",
                900: "#302b08"
            },
        }: {
            grey: {
                100: "#f8f8f8",
                200: "#c2c2c2",
                300: "#a3a3a3",
                400: "#858585",
                500: "#666666",
                600: "#525252",
                700: "#3d3d3d",
                800: "#292929",
                900: "#141414"
            },
            primary: {
                100: "#fce3d4",
                200: "#f9c6a9",
                300: "#f6aa7d",
                400: "#f38d52",
                500: "#f07127",
                600: "#c05a1f",
                700: "#904417",
                800: "#602d10",
                900: "#301708"
            },
            blueAccent: {
                100: "#d4edfc",
                200: "#a9dbf9",
                300: "#7dcaf6",
                400: "#52b8f3",
                500: "#27a6f0",
                600: "#1f85c0",
                700: "#176490",
                800: "#104260",
                900: "#082130"
            },
            redAccent: {
                100: "#fcd4d9",
                200: "#f9a9b3",
                300: "#f67d8e",
                400: "#f35268",
                500: "#f02742",
                600: "#c01f35",
                700: "#901728",
                800: "#60101a",
                900: "#30080d"
            },
            yellowAccent: {
                100: "#fcf7d4",
                200: "#f9eea9",
                300: "#f6e67d",
                400: "#f3dd52",
                500: "#f0d527",
                600: "#c0aa1f",
                700: "#908017",
                800: "#605510",
                900: "#302b08"
            },
        }
    )
});

//mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: "light",
            ...(mode === 'dark'
            ?{
                primary:{
                    main: colors.primary[500],
                    dark: colors.primary[400],
                    contrastText: '#fff',
                },
                secondary:{
                    main: colors.blueAccent[500],
                },
                neutral:{
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },
                background:{
                    default: "#fff",
                }
            } : {
                primary:{
                    main: colors.primary[500],
                },
                secondary:{
                    main: colors.blueAccent[500],
                },
                neutral:{
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },
                background:{
                    default: colors.grey[500],
                }
            })
        },
        typography:{
            fontFamily: ["Open Sans", "sans-serif"].join(","),
            fontSize: 12,
            

            h1:{
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 30,
                marginBottom: "30px",
                letterSpacing:"7px",
                '@media (min-width:600px)': {
                    fontSize: 40
                  },
            },

            h2:{
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 20,
                fontWeight: "600",
                marginBottom: "30px",
                '@media (min-width:600px)': {
                    fontSize: 28
                },
                '@media (min-width:1536px)': {
                    fontSize: 34
                },
            },

            h3:{
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 24,
                
            },

            h4:{
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 15,
                '@media (min-width:600px)': {
                    fontSize: 20
                },

                
            },

            h5:{
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 16,
                
            },

            h6:{
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
        button: {
            fontSize:"40px"
            },

    }
};

//context fir color mode
export const ColorModeContext = createContext({
    toggleColorMode: () =>{}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)),[mode])

    return [theme, colorMode];
}
