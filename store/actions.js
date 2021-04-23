import { IS_CONNECT } from "./types"
import NetInfo from "@react-native-community/netinfo"
import { Linking } from 'react-native'


export const setIConnect = (data) => {
    return {
        type: IS_CONNECT,
        payload: data
    }
}

export const checkIConnect = () => async (dispatch, getState) => {
    const state = await NetInfo.fetch()

    if (state.isConnected == true) {
        dispatch(setIConnect(true))
    } else {
        dispatch(setIConnect(false))
    }

    //dispatch(checkIUpdate())
}

export const checkIUpdate = () => (dispatch, getState) => {
    NetInfo.addEventListener(state => {
        if (state.isConnected == true) {
            dispatch(setIConnect(true))
        } else {
            dispatch(setIConnect(false))
        }
    })
}