import {sortingPayload, UserType} from "../HW8";

type CommonActionType = sortNamesACType | CheckAgeACType

export const homeWorkReducer = (state: UserType[], action: CommonActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            if (action.payload === 'up') {
                return [...state.sort( (a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1 )]
            } else if (action.payload === 'down') {
                return [...state.sort( (a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1 )]
            }
            return state
        }
        case 'check': {
            // need to fix
            return [...state.filter(el => el.age >= action.age)]
        }
        default: return state
    }
}

type sortNamesACType = ReturnType<typeof sortNamesAC>
export const sortNamesAC = (payload: sortingPayload) => {
    return {type: 'sort', payload} as const
}

type CheckAgeACType = ReturnType<typeof checkAgeAC>
export const checkAgeAC = (age: number) => {
    return {type: 'check', age} as const
}

