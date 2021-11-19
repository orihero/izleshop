import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItemModel } from 'components/special/ProductItem';
import { IHorizontalItemModel } from 'src/components/special/HorizontalItem';
import { RootState } from '../configureStore';

let initialState: {
	[key: string]: { data: IHorizontalItemModel; count: number, isActive: boolean };
} = {};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ProductItemModel>) => {
			state[action.payload.id] = { data: action.payload, count: 1, isActive: true };
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			state = Object.keys(state).reduce((p, c) => {
				if (c === action.payload) {
					return p;
				}
				return { ...p, [c]: state[c] };
			}, {});
			return state;
		},
		incrementCount: (state, action: PayloadAction<string>) => {
			state = Object.keys(state).reduce((p, c) => {
				if (c === action.payload) {
					return {
						...p,
						[c]: { ...state[c], count: state[c].count + 1 },
					};
				}
				return { ...p, [c]: state[c] };
			}, {});
			return state;
		},
		decrementCount: (state, action: PayloadAction<string>) => {
			state = Object.keys(state).reduce((p, c) => {
				if (c === action.payload) {
					return {
						...p,
						[c]: { ...state[c], count: state[c].count - 1 },
					};
				}
				return { ...p, [c]: state[c] };
			}, {});
			return state;
		},
		clearCart: () => initialState,
		setActiveCartItem: (state, action: PayloadAction<{ id: string, isActive: boolean }>) => {
			state = Object.keys(state).reduce((p, c) => {
				if (c === action.payload.id.toString()) {
					return {
						...p,
						[c]: { ...state[c], isActive: action.payload.isActive },
					};
				}
				return { ...p, [c]: state[c] };
			}, {});
			console.log("THIS IS STATE", state, action.payload);

			return state;
		}
	},
});

// Action creators are generated for each case reducer function
export const {
	addToCart,
	clearCart,
	removeFromCart,
	decrementCount,
	incrementCount,
	setActiveCartItem
} = cartSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart;
export const selectCartList = (state: RootState) =>
	Object.keys(state.cart).map((e) => state.cart[e]);
export const selectCartTotal = (state: RootState) =>
	Object.keys(state.cart).reduce((p, c) => {
		if (!state.cart[c].isActive) {
			return p;
		}
		return p + parseFloat(state.cart[c].data.price) * state.cart[c].count;
	}, 0);

export default cartSlice.reducer;
