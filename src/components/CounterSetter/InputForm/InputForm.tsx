import React from "react";
import {theme} from "../../Theme";
import classes from "./InputForm.module.css";
import {TextField} from "@mui/material";


const InputForm = () => {
    return (
        <div className={classes.input_container}>
            <span className={classes.text}>Max Value: </span> <TextField
            type={"number"}
            label="Max Value:"
            focused
        />
        </div>
    )
}

export default InputForm