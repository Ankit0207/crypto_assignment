import { combineReducers, legacy_createStore, applyMiddleware } from 'redux'
import { reducer as cryptoReducer } from './CryptoReducer/Reducer'
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
    cryptoReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))