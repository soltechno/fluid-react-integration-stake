import { createSlice } from '@reduxjs/toolkit';

const fluidSlice = createSlice({
	name: 'fluid',
	initialState: {
		open: false,
		transaction: undefined,
	},
	reducers: {
		setOpen: (state, action) => {
			state.open = action.payload;
		},
		toggleOpen: (state) => {
			state.open = !state.open;
		},
		setTransaction: (state, action) => {
			state.transaction = action.payload;
		},
	},
});

export const { setOpen, toggleOpen, setTransaction } = fluidSlice.actions;
export default fluidSlice.reducer;
