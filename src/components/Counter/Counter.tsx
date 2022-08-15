import classes from "./Counter.module.css";
import React, {useState} from "react";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {StateType} from "../reducers/values-reducer";

type CounterPropsType = {
    currentValue: number
    error: boolean
    increaseValue: () => void
    resetValues: () => void
    state: StateType
}

const Counter = (props: CounterPropsType) => {

    const navigate = useNavigate()

    const setBtnHandler = () => {
        navigate('/set')
    }

    const IncreaseBtnHandler = () => {
        props.increaseValue()
    }

    const ResetBtnHandler = () => {
        props.resetValues()
    }

    const errorNumber = props.error ? {color: 'red'} : {}
    const displayText = props.state.startValue > props.state.maxValue ? 'Wrong settings!' : `${props.currentValue}`
    const btnDisabler = props.state.error || props.state.startValue === props.state.maxValue

    return (

        <div className={classes.counter}>
            <div className={classes.screen}>
                <span className={classes.number}
                      style={errorNumber}>{displayText}</span>
            </div>
            <div className={classes.controller}>

                <Button disabled={btnDisabler}
                        variant={"contained"}
                        className={classes.btn}
                        onClick={IncreaseBtnHandler}>Inc</Button>

                <Button variant={"contained"}
                        className={classes.btn}
                        onClick={ResetBtnHandler}>Reset</Button>

                <Button variant={"contained"}
                        className={classes.btn}
                        onClick={setBtnHandler}>Set</Button>

            </div>
        </div>

    )
}

export default Counter