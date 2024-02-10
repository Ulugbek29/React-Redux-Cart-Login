import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Auth/auth.slice"
import cartReducer from "./Cart/cart.slice"


const persisitAuthConfig={
    key: "auth",
    storage
}

const persisitCartConfig={
    key: "cart",
    storage
}


export const rootReducer = combineReducers({
    auth: persistReducer(persisitAuthConfig, authReducer),
    cart: persistReducer(persisitCartConfig, cartReducer)
})