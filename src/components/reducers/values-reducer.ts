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
export type ActionType = IncreaseMaxValue | IncreaseStartValue | setError | IncreaseValue

export const ValuesReducer = (state: StateType, action: ActionType): StateType => {

    switch (action.type) {
        case "INCREASE-MAX-VALUE": {
            return {...state, maxValue: action.payload.value}
        }
        case "INCREASE-START-VALUE": {
            return {...state, startValue: action.payload.value}
        }
        case "INCREASE_VALUE": {
            return {...state, currentValue: state.startValue}
        }
        case "SET_ERROR": {
            if (state.startValue > state.maxValue) {
                return {...state, error: true}
            }
            if ((state.startValue | state.maxValue) < 0) {
                return {...state, error: true}
            }
            else {
                return {...state, error: false}
            }
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
