import { createReducer } from '@reduxjs/toolkit';
import { setDisableAllPlugin } from './actions';

export type globalState = {
	isAllPluginEnabled: boolean;
};

export const initialState: globalState = {
	isAllPluginEnabled: true,
};

export const globalReducer = createReducer(initialState, builder => {
	builder.addCase(setDisableAllPlugin, (state, action) => {
		state.isAllPluginEnabled = action.payload;
	});
});
