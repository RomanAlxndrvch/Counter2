import React from "react";
import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#37DEFF"
        },
    },
    typography: {
        fontFamily: 'Times New Roman',
        button: {
            fontSize: "25px",
        }
    }
})