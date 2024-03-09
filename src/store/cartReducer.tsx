import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../@types/types';

const initialState: { cart: Product[] } = {
	cart: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		add: (state, action: PayloadAction<Product>) => {
			state.cart.push(action.payload);
		},
		remove: (state, action: PayloadAction<number>) => {
			state.cart = state.cart.filter((product) => product.id !== action.payload);
		},
	},
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
