import { CAR_INFO, COUNT, GET_CAR_FILE, GET_PASPORT, IS_LOAD, LIST } from "./types"

initialState = {
    count: 0,
    data: [],
    carList: [],
    fileList: [],
    isLoad: false,
    pasportList: []
}

export const CarReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNT:
            return { ...state, count: action.payload }
        case LIST:
            return { ...state, data: action.payload }
        case CAR_INFO:
            return { ...state, carList: action.payload }
        case GET_CAR_FILE:
            return { ...state, fileList: action.payload }
        case IS_LOAD:
            return { ...state, isLoad: action.payload }
        case GET_PASPORT:
            return { ...state, pasportList: action.payload }
        default:
            return state
    }
}