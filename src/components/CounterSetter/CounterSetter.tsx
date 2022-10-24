import React, {Dispatch} from "react";
import classes from './CounterSetter.module.css'
import {Button, ThemeProvider} from "@mui/material";
import {theme} from "../Theme";
import {useNavigate} from "react-router-dom";
import InputForm from "./InputForm/InputForm";
import {IncreaseMaxValueAC, IncreaseStartValueAC, setErrorAC, StateType} from "../reducers/values-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../reducers/store";

const CounterSetter = () => {
    const values = useSelector<AppRootStateType, StateType>((state) => {
        return state.values
    })

    const dispatch = useDispatch()

    const increaseMaxValueBtnHandler = (num: number) => {
        dispatch(IncreaseMaxValueAC(num))
    }
    const increaseStartValueBtnHandler = (num: number) => {
        dispatch(IncreaseStartValueAC(num))
    }

    const setErrorBtnHandler = () => {
        dispatch(setErrorAC())
    }

    const navigate = useNavigate()

    const counterSetterBtnHandler = () => {
        navigate('/counter')
    }

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.counter_setter}>

                <div className={classes.settings_container}>
                    <InputForm title={'Max Value:'}
                               value={values.maxValue}
                               error={values.error}
                               onChange={increaseMaxValueBtnHandler}
                               setError={setErrorBtnHandler}
                    />

                    <InputForm title={'Start Value: '}
                               value={values.startValue}
                               error={values.error}
                               onChange={increaseStartValueBtnHandler}
                               setError={setErrorBtnHandler}
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