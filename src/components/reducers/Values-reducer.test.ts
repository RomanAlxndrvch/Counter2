import {IncreaseMaxValueAC, ValuesReducer, stateType, IncreaseStartValueAC} from "./Values-reducer";

test('max value should increase', () => {
    const initialValues: stateType = {
        startValue: 0,
        maxValue: 0
    }

    const finalValues = ValuesReducer(initialValues, IncreaseMaxValueAC(22))

    expect(finalValues).not.toBe(initialValues)
    expect(finalValues.maxValue).toBe(22)
})

test('start value should increase', () => {
    const initialValues: stateType = {
        startValue: 0,
        maxValue: 0
    }

    const finalValues = ValuesReducer(initialValues, IncreaseStartValueAC(22))

    expect(finalValues).not.toBe(initialValues)
    expect(finalValues.startValue).toBe(22)
})