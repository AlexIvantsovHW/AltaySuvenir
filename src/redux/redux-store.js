import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


import ProductReducer from "./product-reducer";


let reducers=combineReducers({
    production:ProductReducer,
})

const store=createStore(reducers,applyMiddleware(thunk));
window.store=store;

export default store;




