import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import fluidReducer from './slices/fluidSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		fluid: fluidReducer
	},
});
