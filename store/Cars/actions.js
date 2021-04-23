import axios from "axios"
import { downloadFile, readDir, DownloadDirectoryPath, mkdir } from 'react-native-fs'
import { CAR_INFO, COUNT, GET_CAR_FILE, LIST, IS_LOAD, GET_PASPORT } from "./types"

export const setCarCount = (data) => {
    return {
        type: COUNT,
        payload: data
    }
}

export const setData = (data) => {
    return {
        type: LIST,
        payload: data
    }
}

export const setCarBaseInfo = (data) => {
    return {
        type: CAR_INFO,
        payload: data
    }
}

export const setCarFile = (data) => {
    return {
        type: GET_CAR_FILE,
        payload: data
    }
}

export const isLoadComplete = (data) => {
    return {
        type: IS_LOAD,
        payload: data
    }
}

export const setPasport = (data) => {
    return {
        type: GET_PASPORT,
        payload: data
    }
}

export const getCarCount = (token) => async (dispatch, getState) => {
    try {
        const result = await axios({
            method: 'get',
            url: 'http://192.168.210.235:2001/api/v1/getusercarcount/',
            headers: {
                "Authorization": token
            }
        })

        if (result.status == 200) {
            dispatch(setCarCount(result.data.message))
        }
    } catch (error) {
        console.error(error)
    }
}

export const getCarList = (token) => async (dispatch, getState) => {
    try {
        const result = await axios({
            method: 'get',
            url: 'http://192.168.210.235:2001/api/v1/getusercarlist/',
            headers: {
                "Authorization": token
            }
        })

        if (result.status == 200) {
            dispatch(setData(result.data.message))
        }
    } catch (error) {
        console.error(error)
    }
}

export const getCarBaseInfo = (token, nomer) => async (dispatch, getState) => {
    try {
        const { Car } = getState()

        if (Car.carList.nomer == nomer) return

        const result = await axios({
            method: 'POST',
            url: 'http://192.168.210.235:2001/api/v1/getbaseinfo/',
            headers: {
                "Authorization": token
            },
            data: {
                "nomer": nomer
            }
        })

        if (result.status == 200) {
            dispatch(setCarBaseInfo(result.data.message))
        }
    } catch (error) {
        console.error(error)
    }
}

export const getCarFile = (token) => async (dispatch, getState) => {
    try {
        const { Car } = getState()

        const result = await axios({
            method: 'POST',
            url: 'http://192.168.210.235:2001/api/v1/getusercarfile/',
            headers: {
                "Authorization": token
            },
            data: {
                "nomer": Car.carList.nomer
            }
        })

        if (result.status == 200) {
            if (result.data.message == undefined) {
                dispatch(setCarFile([]))
                return
            }
            readDir(DownloadDirectoryPath).then(res => {
                result.data.message.map((file, i) => {
                    res.map(item => {
                        if (`${file.name}.${file.file_format}` == item.name && file.size == item.size) {
                            result.data.message[i].local = true
                            result.data.message[i].localPath = item.path
                        }
                    })
                })

                dispatch(setCarFile(result.data.message))
            }).catch(err => {
                console.log(err)
            })
        }
    } catch (error) {
        console.error(error)
    }
}

export const downloadCarFile = (index, url, fileName) => async (dispatch, getState) => {
    const { Car } = getState()

    const listData = Car.fileList

    downloadFile({
        fromUrl: url,
        toFile: `${DownloadDirectoryPath}/${fileName}`,
        begin: (res) => { },
        progress: (res) => { }
    }).promise.then((res) => {
        dispatch(isLoadComplete(true))
        listData[index].local = true
        listData[index].localPath = `${DownloadDirectoryPath}/${fileName}`
        dispatch(setCarFile(listData))
    }).catch(error => {
        console.error(error)
    })
}

export const getPasport = (token) => async (dispatch, getState) => {
    try {
        const result = await axios({
            method: 'get',
            url: 'http://192.168.210.235:2001/api/v1/getcarpasport/',
            headers: {
                "Authorization": token
            }
        })

        if (result.status == 200) {
            dispatch(setPasport(result.data.message))
        }
    } catch (error) {
        console.error(error)
    }
}