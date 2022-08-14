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
                    ":hover": {},
                    borderColor: mainColor,
                    color: mainColor,

                },
                root: {
                    color: mainColor,
                    borderColor: mainColor
                },

            }
        }
        ,
        MuiInputLabel: {
            styleOverrides: {
                outlined: {
                    color: mainColor,
                    fontSize: '16px'
                }
            }
        },
    }
})