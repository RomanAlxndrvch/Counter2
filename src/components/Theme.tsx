import React from "react";
import {createTheme} from "@mui/material";


const mainColor = '#37DEFF'

export const theme = createTheme({
    palette: {
        primary: {
            main: mainColor
        },
    },
    typography: {
        fontFamily: 'Times New Roman',
        button: {
            fontSize: "25px",
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    fontSize: '25px'

                },
                root: {
                    fontSize: '24px',
                    color: mainColor,
                },
            }
        }
        ,
        MuiInputLabel: {
            styleOverrides: {
                outlined: {
                    color: mainColor,
                    fontSize: '25px'
                }


            },
        },
    }
})