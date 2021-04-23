import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { AuthReducer } from './Auth/reducers'
import { CarReducer } from './Cars/reducers'
import { AppReducer } from './reducers'

const rootReducers = combineReducers({
    App: AppReducer,
    Auth: AuthReducer,
    Car: CarReducer,
})

export default createStore(rootReducers, applyMiddleware(thunk))