import {RootState} from "../store.ts";

export const selectWeatherData = (state:RootState) => state.weatherSlice.weather
export const selectWeatherList = (state:RootState) => state.weatherSlice.weatherList
export const selectWeatherItemData = (state:RootState) => state.weatherSlice.weatherItem
export const selectWeatherItemPerDay = (state:RootState) => state.weatherSlice.weatherItemPerDay
export const selectUI = (state:RootState) => state.weatherSlice.UI