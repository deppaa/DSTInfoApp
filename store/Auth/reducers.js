import { IS_AUTH, LOGIN, PASSWORD, TOKEN } from "./types"


initialState = {
    login: '',
    password: '',
    isAuth: false,
    token: '',
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, login: action.payload }
        case PASSWORD:
            return { ...state, password: action.payload }
        case IS_AUTH:
            return { ...state, isAuth: action.payload }
        case TOKEN:
            return { ...state, token: action.payload }
        default:
            return state
    }
}