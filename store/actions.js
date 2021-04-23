import { IS_LOAD } from "./types"


export const isLoading = (data) => {
    return {
        type: IS_LOAD,
        payload: data
    }
}