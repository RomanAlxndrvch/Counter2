import classes from "./Counter.module.css";
import React from "react";
import {Button} from "@mui/material";

const Counter = () => {
    return (
        <div className={classes.counter}>
            <div className={classes.screen}>
                <span className={classes.number}>222</span>
            </div>
            <div className={classes.controller}>
                <Button variant={"contained"} className={classes.btn}>Inc</Button>
                <Button variant={"contained"} className={classes.btn}>Reset</Button>
                <Button variant={"contained"} className={classes.btn}>Set</Button>
            </div>
        </div>
    )
}

export default Counter