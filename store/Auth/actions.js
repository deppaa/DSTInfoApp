import axios from "axios"
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { IS_AUTH, LOGIN, PASSWORD, TOKEN } from "./types"

const { getItem, setItem } = useAsyncStorage('token')

export const setLogin = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}

export const setPassword = (data) => {
    return {
        type: PASSWORD,
        payload: data
    }
}

export const isAuth = (data) => {
    return {
        type: IS_AUTH,
        payload: data
    }
}

export const setToken = (data) => {
    return {
        type: TOKEN,
        payload: data
    }
}

export const getToken = (login, password) => async (dispatch, getState) => {
    try {
        const result = await axios({
            method: 'post',
            url: 'http://192.168.210.235:2001/api/v1/auth/',
            data: {
                login: login,
                password: password
            }
        })

        if (result.status == 200) {
            await setItem(result.data.message)
            dispatch(setToken(result.data.message))
            dispatch(isAuth(true))
        }
    } catch (error) {
        console.error(error)
    }
}

export const chekToken = (token) => async (dispatch, getState) => {
    try {
        const result = await axios({
            method: 'post',
            url: 'http://192.168.210.235:2001/api/v1/check-token/',
            data: {
                jwt: token
            }
        })

        if (result.status == 200) {
            dispatch(setToken(token))
            dispatch(isAuth(true))
        }
    } catch (error) {
        console.error(error)
    }
}

export const isAutorise = () => async (dispatch, getState) => {
    try {
        const token = await getItem()

        if (token != null) {
            dispatch(chekToken(token))
        } else {
            dispatch(setToken(false))
        }

    } catch (error) {
        console.error(error)
    }
}