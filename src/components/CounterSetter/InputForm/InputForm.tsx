import React, {ChangeEvent, useState} from "react";
import classes from "./InputForm.module.css";
import {TextField} from "@mui/material";
import {StateType} from "../../reducers/values-reducer";


type InputFormPropsType = {
    title: string
    value: number
    error: boolean

    onChange: (e: number) => void
    setError: () => void
    values?: StateType
}

const InputForm = (props: InputFormPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(parseInt(e.currentTarget.value))
        props.setError()
    }

    return (
        <div className={classes.input_container}>
            <TextField
                onChange={onChangeHandler}
                value={props.value}
                inputProps={{style: {textAlign: 'center'}}}
                type={"number"}
                label={`${props.title}`}
                error={props.error}
                focused
            />
        </div>
    )
}

export default InputForm


