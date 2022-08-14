export type stateType = {
    maxValue: number
    startValue: number
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
export type ActionType = IncreaseMaxValue | IncreaseStartValue

export const ValuesReducer = (state: stateType, action: ActionType): stateType => {

    switch (action.type) {
        case "INCREASE-MAX-VALUE": {
            return {...state, maxValue: action.payload.value}
        }
        case "INCREASE-START-VALUE": {
            return {...state, startValue: action.payload.value}
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