import {IncreaseMaxValueAC, ValuesReducer, StateType, IncreaseStartValueAC, setErrorAC} from "./values-reducer";

test('max value should increase', () => {
    const initialValues: StateType = {
        startValue: 0,
        maxValue: 0,
        currentValue: 0,
        error: false
    }

    const finalValues = ValuesReducer(initialValues, IncreaseMaxValueAC(22))

    expect(finalValues).not.toBe(initialValues)
    expect(finalValues.maxValue).toBe(22)
})

test('start value should increase', () => {
    const initialValues: StateType = {
        startValue: 0,
        maxValue: 0,
        currentValue: 0,
        error: false
    }

    const finalValues = ValuesReducer(initialValues, IncreaseStartValueAC(22))

    expect(finalValues).not.toBe(initialValues)
    expect(finalValues.startValue).toBe(22)
})

test('change error state', () => {

    const initialValues: StateType = {
        startValue: 2,
        maxValue: 0,
        currentValue: 0,
        error: false
    }

    const finalValues = ValuesReducer(initialValues, setErrorAC())

    expect(finalValues).not.toBe(initialValues)
    expect(finalValues.error).toBe(true)
})