import classes from "./Counter.module.css";
import React from "react";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

type CounterPropsType = {
    currentValue: number
    error: boolean
    increaseValue: () => void
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

    }

    const errorNumber = props.error ? {color: 'red'} : {}

    return (

        <div className={classes.counter}>
            <div className={classes.screen}>
                <span className={classes.number}
                      style={errorNumber}>{props.currentValue}</span>
            </div>
            <div className={classes.controller}>

                <Button disabled={props.error}
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