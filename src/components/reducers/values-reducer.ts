export type StateType = {
    maxValue: number
    startValue: number
    currentValue: number
    error: boolean
}

export type IncreaseMaxValue = {
    type: 'INCREASE-MAX-VALUE',
    payload: {
        value: number
    }
}
export type IncreaseStartValue = {
    type: 'INCREASE-START-VALUE',
    payload: {
        value: number
    }
}
export type IncreaseValue = {
    type: 'INCREASE_VALUE'
}
export type setError = {
    type: 'SET_ERROR'
}
export type ResetValues = {
    type: 'RESET_VALUES'
}
export type ActionType = IncreaseMaxValue | IncreaseStartValue | setError | IncreaseValue | ResetValues

export const ValuesReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case "INCREASE-MAX-VALUE": {
            return {...state, maxValue: action.payload.value}
        }
        case "INCREASE-START-VALUE": {
            return {...state, startValue: action.payload.value, currentValue: action.payload.value}
        }
        case "INCREASE_VALUE": {
            if (state.currentValue >= state.maxValue) {
                return {...state, error: true}
            }
            else {
                return {...state, currentValue: state.currentValue++}
            }
        }
        case "SET_ERROR": {
            if (state.startValue > state.maxValue || (state.startValue | state.maxValue) < 0 || state.currentValue >= state.maxValue) {
                return {...state, error: true}
            }
            else {
                return {...state, error: false}
            }
        }
        case "RESET_VALUES": {
            return {...state, error: false, currentValue: state.startValue,  /*maxValue: 0, startValue: 0*/}
        }
    }
}

export const IncreaseMaxValueAC = (value: number): IncreaseMaxValue => {
    return {
        type: "INCREASE-MAX-VALUE",
        payload: {
            value
        }
    }
}

export const IncreaseStartValueAC = (value: number): IncreaseStartValue => {
    return {
        type: 'INCREASE-START-VALUE',
        payload: {
            value
        }
    }
}

export const setErrorAC = (): setError => {
    return {
        type: "SET_ERROR"
    }
}

export const IncreaseValueAC = (): IncreaseValue => {
    return {
        type: "INCREASE_VALUE"
    }
}

export const ResetValuesAC = (): ResetValues => {
    return {
        type: "RESET_VALUES"
    }
}
