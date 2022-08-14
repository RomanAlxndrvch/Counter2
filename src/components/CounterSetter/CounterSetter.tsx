import React, {Dispatch} from "react";
import classes from './CounterSetter.module.css'
import {Button, ThemeProvider} from "@mui/material";
import {theme} from "../Theme";
import {useNavigate} from "react-router-dom";
import InputForm from "./InputForm/InputForm";
import {stateType} from "../reducers/Values-reducer";

type CounterSetterPropsType = {
    values: stateType
    increaseMaxValueBtnHandler: (e: number) => void
    increaseStartValueBtnHandler: (e: number) => void
}

const CounterSetter = (props: CounterSetterPropsType) => {
    const navigate = useNavigate()

    const counterSetterBtnHandler = () => {
        navigate('/counter')
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.counter_setter}>

                <div className={classes.settings_container}>
                    <InputForm title={'Max Value:'}
                               value={props.values.maxValue}
                               onChange={props.increaseMaxValueBtnHandler}
                    />

                    <InputForm title={'Start Value: '}
                               value={props.values.startValue}
                               onChange={props.increaseStartValueBtnHandler}/>
                </div>

                <div className={classes.btn_container}>
                    <Button className={classes.btn} variant={"contained"} onClick={counterSetterBtnHandler}>Set</Button>
                </div>

            </div>

        </ThemeProvider>

    )
}

export default CounterSetter