import React, {Dispatch} from "react";
import classes from './CounterSetter.module.css'
import {Button, ThemeProvider} from "@mui/material";
import {theme} from "../Theme";
import {useNavigate} from "react-router-dom";
import InputForm from "./InputForm/InputForm";
import {StateType} from "../reducers/values-reducer";

type CounterSetterPropsType = {
    values: StateType
    increaseMaxValueBtnHandler: (e: number) => void
    increaseStartValueBtnHandler: (e: number) => void
    setError: () => void
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
                               error={props.values.error}
                               onChange={props.increaseMaxValueBtnHandler}
                               setError={props.setError}
                               values={props.values}
                    />

                    <InputForm title={'Start Value: '}
                               value={props.values.startValue}
                               error={props.values.error}
                               onChange={props.increaseStartValueBtnHandler}
                               setError={props.setError}
                               values={props.values}
                    />
                </div>

                <div className={classes.btn_container}>
                    <Button className={classes.btn} variant={"contained"} onClick={counterSetterBtnHandler}>Set</Button>
                </div>

            </div>

        </ThemeProvider>

    )
}

export default CounterSetter