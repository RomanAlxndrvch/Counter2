import React, {ChangeEvent} from "react";
import classes from "./InputForm.module.css";
import {TextField} from "@mui/material";


type InputFormPropsType = {
    title: string
    value: number
    onChange: (e: number) => void
}

const InputForm = (props: InputFormPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(parseInt(e.currentTarget.value))
    }

    return (
        <div className={classes.input_container}>
            <TextField
                onChange={onChangeHandler}
                value={props.value}
                inputProps={{style: {textAlign: 'center'}}}
                type={"number"}
                label={props.title}
                error={props.value < 0}
                focused
            />
        </div>
    )
}

export default InputForm


