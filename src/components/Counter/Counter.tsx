import classes from "./Counter.module.css";
import React, {useEffect} from "react";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {IncreaseValueAC, ResetValuesAC, setErrorAC, StateType} from "../reducers/values-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../reducers/store";


const Counter = () => {

    const values = useSelector<AppRootStateType, StateType>((state) => {
        return state.values
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const setBtnHandler = () => {
        navigate('/set')
    }

    const IncreaseBtnHandler = () => {
        dispatch(IncreaseValueAC())
    }

    const ResetBtnHandler = () => {
        dispatch(ResetValuesAC())
    }
    useEffect(() => {
        if (values.currentValue >= values.maxValue) {
            dispatch(setErrorAC())
        }
    }, [values.currentValue])

    const errorNumber = values.error ? {color: 'red'} : {}
    const displayText = values.startValue > values.maxValue ? 'Wrong settings!' : `${values.currentValue}`
    const btnDisabler = values.error || values.startValue === values.maxValue

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