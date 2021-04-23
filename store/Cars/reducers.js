import { CAR_INFO, COUNT, GET_CAR_FILE, GET_PASPORT, IS_LOAD, LIST, GET_PASPORT_DETAIL, SET_PASPORT_ITEM } from "./types"

initialState = {
    count: 0,
    data: [],
    carList: [],
    fileList: [],
    isLoad: false,
    pasportList: [],
    pasportDetail: [],
    curentPasportItem: []
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
        case GET_PASPORT_DETAIL:
            return { ...state, pasportDetail: action.payload }
        case SET_PASPORT_ITEM:
            return { ...state, curentPasportItem: action.payload }
        default:
            return state
    }
}