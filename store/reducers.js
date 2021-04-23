import { IS_CONNECT } from "./types"


initialState = {
    isConnect: true
}

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_CONNECT:
            return { ...state, isConnect: action.payload }
        default:
            return state
    }
}