import {combineReducers, createStore, legacy_createStore} from "redux";
import {ValuesReducer} from "./values-reducer";

const rootReducer = combineReducers({
    values: ValuesReducer
})

export const store = legacy_createStore(rootReducer)  // создаем стор

export type AppRootStateType = ReturnType<typeof rootReducer>