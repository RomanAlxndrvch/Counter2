import React from 'react';
import classes from './App.module.css';
import Counter from "./components/Counter/Counter";
import {theme} from "./components/Theme";
import {ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CounterSetter from "./components/CounterSetter/CounterSetter";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <div className={classes.App}>
                    <Routes>
                        <Route path={'/'} element={<Counter/>}/>
                        <Route path={'/counter'} element={<Counter/>}/>
                        <Route path={'/set'} element={<CounterSetter/>}/>
                    </Routes>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
