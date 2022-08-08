import React from 'react';
import classes from './App.module.css';

function App() {
    return (
        <div className={classes.App}>
            <div className={classes.counter}>
                <div className={classes.screen}>0</div>
                <div className={classes.controller}>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>
            </div>
        </div>
    );
}

export default App;
