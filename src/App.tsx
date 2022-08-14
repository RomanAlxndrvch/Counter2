import React, {useReducer} from 'react';
import classes from './App.module.css';
import Counter from "./components/Counter/Counter";
import {theme} from "./components/Theme";
import {ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CounterSetter from "./components/CounterSetter/CounterSetter";
import {IncreaseMaxValueAC, IncreaseStartValueAC, ValuesReducer} from "./components/reducers/Values-reducer";

function App() {

    const [values, dispatchValues] = useReducer(ValuesReducer, {
        maxValue: 0,
        startValue: 0
    })

    const increaseMaxValueBtnHandler = (e: number) => {
        dispatchValues(IncreaseMaxValueAC(e))
    }

    const increaseStartValueBtnHandler = (e: number) => {
        dispatchValues(IncreaseStartValueAC(e))
    }


    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <div className={classes.App}>
                    <Routes>
                        <Route path={'/'} element={<Counter/>}/>
                        <Route path={'/counter'} element={<Counter/>}/>
                        <Route path={'/set'} element={<CounterSetter
                            values={values}
                            increaseMaxValueBtnHandler={increaseMaxValueBtnHandler}
                            increaseStartValueBtnHandler={increaseStartValueBtnHandler}
                        />}/>
                    </Routes>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
