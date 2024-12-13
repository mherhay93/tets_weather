import {all, fork} from "redux-saga/effects";
import weatherSaga from "./weather/saga.ts";

function* sagas() {
    yield all([
        fork(weatherSaga),
    ]);
}

export default sagas