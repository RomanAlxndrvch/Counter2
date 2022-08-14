import React from "react";
import classes from './CounterSetter.module.css'
import {Button, TextField, ThemeProvider} from "@mui/material";
import {theme} from "../Theme";
import {useNavigate} from "react-router-dom";
import InputForm from "./InputForm/InputForm";


const CounterSetter = () => {
    const navigate = useNavigate()

    const counterSetterBtnHandler = () => {
        navigate('/counter')
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.counter_setter}>
                <div className={classes.settings_container}>

                    <InputForm/>

                    <InputForm/>
                </div>

                <div className={classes.btn_container}>
                    <Button className={classes.btn} variant={"contained"} onClick={counterSetterBtnHandler}>Set</Button>
                </div>

            </div>


        </ThemeProvider>

    )
}

export default CounterSetter