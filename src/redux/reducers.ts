import {combineReducers} from "@reduxjs/toolkit";
import weatherSlice from "./weather/slice.ts"


const reducer = combineReducers({
    weatherSlice
})

export default reducer