import { GET_CRYPTO_FAILURE, GET_CRYPTO_REQUEST, GET_CRYPTO_SUCCESS, GET_SINGLE_CRYPTO_SUCCESS } from "./ActionType"

const initialState= {
    cryptos: [],
    single_crypto: {},
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CRYPTO_REQUEST:
            return { ...state, isLoading: true }

        case GET_CRYPTO_SUCCESS:
            return { ...state, isLoading: false, cryptos: action.payload }

        case GET_SINGLE_CRYPTO_SUCCESS:
            return { ...state, isLoading: false, single_crypto: action.payload }

        case GET_CRYPTO_FAILURE:
            return { ...state, isError: true }

        default:
            return state
    }
}