import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {AxiosResponse} from "axios";
import {IActionGetWeather, IResWeather, IResWeatherItem, IWeatherItemPerDay} from "./types.ts";
import {weatherActions} from "./actions.ts";
import {getWeather, getWeatherItem} from "./api.ts";
import {weatherReducers} from "./slice.ts";


function* getWeatherData() {
    yield takeEvery(weatherActions.GET_WEATHER, function* (action: IActionGetWeather) {
        const {data} = action
        try {
            const res: AxiosResponse<IResWeather> = yield call(getWeather, data);
            yield put(weatherReducers.setWeather(res.data))

            const daysList = res.data && res.data.list.reduce((acc, item) => {
                const key = new Date(item.dt_txt).getDate()
                if (acc[key]) {
                    acc[key].push(item)
                } else {
                    acc[key] = [item]
                }
                return acc
            }, {} as IWeatherItemPerDay);
            const startDate = Object.keys(daysList)[0]
            yield put(weatherReducers.setWeatherPerDay(daysList))
            yield put(weatherReducers.setUI({selectedDay: startDate}))
            yield put(weatherReducers.setWeatherList(daysList[startDate]))

        } catch (e) {
            console.log('e ========', e)
        }

    })
}

function* getWeatherForItem() {
    yield takeEvery(weatherActions.GET_WEATHER_ITEM, function* (action: IActionGetWeather) {
        const {data} = action
        try {
            const res: AxiosResponse<IResWeatherItem> = yield call(getWeatherItem, data);
            yield put(weatherReducers.setWeatherItem(res.data))

        } catch (e) {
            console.log('e ========', e)
        }

    })
}

export default function* weatherSaga() {
    yield all([
        fork(getWeatherData),
        fork(getWeatherForItem),
    ]);
}
