
export type ThemeStateType = {
    backgroundTheme: string
    fontColor: string
}

const initState = {
    backgroundTheme: 'dark',
    fontColor: 'some'
}

export type MainActionsT = changeThemeCType | changeFontCType

export const themeReducer = (state: ThemeStateType = initState, action: MainActionsT): ThemeStateType => { // fix any
    switch (action.type) {
        case "CHANGE-BACKGROUND-THEME": {
            return {...state, backgroundTheme: action.chosenTheme}
        }
        case 'CHANGE-FONT-COLOR': {
            return {...state, fontColor: action.chosenFont}
        }
        default: return state;
    }
};

export type changeFontCType = {type: 'CHANGE-FONT-COLOR', chosenFont: string}
export const changeFontC = (chosenFont: string): changeFontCType => {
    return {type: 'CHANGE-FONT-COLOR', chosenFont}
}

export type changeThemeCType = {type: 'CHANGE-BACKGROUND-THEME', chosenTheme: string}
export const changeThemeC = (chosenTheme: string): changeThemeCType => {
    return {type: 'CHANGE-BACKGROUND-THEME', chosenTheme}
}; // fix any