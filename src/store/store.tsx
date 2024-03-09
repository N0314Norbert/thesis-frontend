import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './loginReducer';
import CartReducer from './cartReducer';

const rootReducer = combineReducers({
	authReducer,
	CartReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
