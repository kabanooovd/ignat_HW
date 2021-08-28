import {loadingAC, loadingReducer, loadingReducerStateType} from "./loadingReducer";

test('loading mode have to be changed', () => {
    const initState: loadingReducerStateType = {
        loading: false
    }
    const action = loadingAC(initState.loading)
    const finalState: loadingReducerStateType = loadingReducer(initState, action)

    expect(finalState.loading).toBe(true)
})