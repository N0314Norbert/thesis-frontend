import { combineReducers, configureStore } from '@reduxjs/toolkit';
import LoginReducer from './loginReducer';

const rootReducer = combineReducers({
	LoginReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
