import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'


import ProductReducer from "./product-reducer";
import LeatherReducer from "./leather-reducer";
import TotemReducer from "./totem-reducer";
import OberegReducer from "./obereg-reducer";
import HoneyReducer from "./honey-reducer";
import CamelReducer from "./camel-reducer";
import MineralReducer from './mineral-reducer';
import MaskReducer from './mask-reducer';



let reducers=combineReducers({
    production:ProductReducer,
    leather:LeatherReducer,
    totem:TotemReducer,
    obereg:OberegReducer,
    honey:HoneyReducer,
    camel:CamelReducer,
    mineral:MineralReducer,
    mask:MaskReducer,
})

const store=createStore(reducers,applyMiddleware(thunk));
window.store=store;

export default store;




