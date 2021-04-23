import { IS_LOAD } from "./types"


initialState = {
    loading: false
}

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOAD:
            return { ...state, loading: action.payload }
        default:
            return state
    }
}