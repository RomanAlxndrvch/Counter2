import React, {useReducer} from 'react';
import classes from './App.module.css';
import Counter from "./components/Counter/Counter";
import {theme} from "./components/Theme";
import {ThemeProvider} from "@mui/material";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CounterSetter from "./components/CounterSetter/CounterSetter";
import {
    IncreaseMaxValueAC,
    IncreaseStartValueAC, IncreaseValueAC, ResetValuesAC,
    setErrorAC,
    ValuesReducer
} from "./components/reducers/values-reducer";

function App() {

    const [values, dispatchValues] = useReducer(ValuesReducer, {
        maxValue: 0,
        startValue: 0,
        currentValue: 0,
        error: false
    })

    const increaseMaxValueBtnHandler = (e: number) => {
        dispatchValues(IncreaseMaxValueAC(e))
    }

    const increaseStartValueBtnHandler = (e: number) => {
        dispatchValues(IncreaseStartValueAC(e))
    }

    const IncreaseValueHandler = () => {
        dispatchValues(IncreaseValueAC())
    }

    const setErrorHandler = () => {
        dispatchValues(setErrorAC())
    }

    const resetHandler = () => {
        dispatchValues(ResetValuesAC())
    }


    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <div className={classes.App}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/counter'}/>}></Route>
                        <Route path={'/counter'} element={
                            <Counter increaseValue={IncreaseValueHandler}
                                     resetValues={resetHandler}
                                     state={values}
                            />}
                        />
                        <Route path={'/set'} element={<CounterSetter
                            values={values}
                            increaseMaxValueBtnHandler={increaseMaxValueBtnHandler}
                            increaseStartValueBtnHandler={increaseStartValueBtnHandler}
                            setError={setErrorHandler}
                        />}/>
                    </Routes>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
