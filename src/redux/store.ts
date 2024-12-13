import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'

import reducer from "./reducers.ts";
import sagas from "./sagas.ts";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(sagas)

export type RootState = ReturnType<typeof store.getState>;

export default store;
