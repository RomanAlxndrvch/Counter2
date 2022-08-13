import classes from "./Counter.module.css";
import React from "react";
import {Button} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";

const Counter = () => {
    const navigate = useNavigate()

    const setBtnHandler = () => {
        navigate('/set')
    }

    return (

        <div className={classes.counter}>
            <div className={classes.screen}>
                <span className={classes.number}>222</span>
            </div>
            <div className={classes.controller}>
                <Button variant={"contained"} className={classes.btn}>Inc</Button>
                <Button variant={"contained"} className={classes.btn}>Reset</Button>
                <Button variant={"contained"} className={classes.btn} onClick={setBtnHandler}>Set</Button>
            </div>
        </div>

    )
}

export default Counter