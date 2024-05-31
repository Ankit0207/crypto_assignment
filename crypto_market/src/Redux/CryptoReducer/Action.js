import { GET_CRYPTO_FAILURE, GET_CRYPTO_REQUEST, GET_CRYPTO_SUCCESS, GET_SINGLE_CRYPTO_SUCCESS } from "./ActionType"
import axios from "axios";

export const getCrypto = () =>  (dispatch) => {
    dispatch({ type: GET_CRYPTO_REQUEST })
     axios.get('https://api.coingecko.com/api/v3/coins/markets?order=market_cap_desc&vs_currency=INR').then((crypto) => {
        dispatch({ type: GET_CRYPTO_SUCCESS, payload: crypto.data })
    })
        .catch(() => {
            dispatch({ type: GET_CRYPTO_FAILURE })
        })
}

export const getSingleCrypto = (id) =>  (dispatch) => {
    dispatch({ type: GET_CRYPTO_REQUEST })
     axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((crypto) => {
        dispatch({ type: GET_SINGLE_CRYPTO_SUCCESS, payload: crypto.data })
    })
        .catch(() => {
            dispatch({ type: GET_CRYPTO_FAILURE })
        })
}

