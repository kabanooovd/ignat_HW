

export type loadingReducerStateType = {
    loading: boolean
}

const initState = {
    loading: false
}
export type MainLoadingActionType = loadingACType
export const loadingReducer = (state: loadingReducerStateType = initState, action: MainLoadingActionType): loadingReducerStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING-MODE': {
            return {...state, loading: !action.loadingMode}
        }
        default: return state
    }
}


type loadingACType = {type: 'CHANGE-LOADING-MODE', loadingMode: boolean}
export const loadingAC = (loadingMode: boolean): loadingACType => {
    return {type: 'CHANGE-LOADING-MODE', loadingMode}
} // fix any