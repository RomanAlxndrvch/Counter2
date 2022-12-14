import React, {useEffect, useReducer} from 'react';
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
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <div className={classes.App}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/counter'}/>}></Route>
                        <Route path={'/counter'} element={
                            <Counter/>}/>
                        <Route path={'/set'} element={<CounterSetter

                        />}/>
                    </Routes>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
