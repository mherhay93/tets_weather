import {IInitialState, IResWeather, IResWeatherItem, IUI, IWeatherItemPerDay, IWeatherList} from "./types.ts";
import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";

const initialState: IInitialState = {
    weather: {},
    weatherItem: {},
    weatherItemPerDay: {},
    weatherList: [],
    UI: {
        selectedDay: ''
    }
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeather(state: Draft<IInitialState>, action: PayloadAction<IResWeather>) {
            state.weather = action.payload;
        },
        setWeatherItem(state: Draft<IInitialState>, action: PayloadAction<IResWeatherItem>) {
            state.weatherItem = action.payload;
        },
        setWeatherPerDay(state: Draft<IInitialState>, action: PayloadAction<IWeatherItemPerDay>) {
            state.weatherItemPerDay = action.payload;
        },
        setWeatherList(state: Draft<IInitialState>, action: PayloadAction<IWeatherList[]>) {
            state.weatherList = action.payload;
        },
        setUI(state: Draft<IInitialState>, action: PayloadAction<IUI>) {
            state.UI = {...state.UI, ...action.payload};
        },
    }
})


export const weatherReducers = {
    setWeather: weatherSlice.actions.setWeather,
    setWeatherItem: weatherSlice.actions.setWeatherItem,
    setWeatherPerDay: weatherSlice.actions.setWeatherPerDay,
    setWeatherList: weatherSlice.actions.setWeatherList,
    setUI: weatherSlice.actions.setUI,
};

export default weatherSlice.reducer;







