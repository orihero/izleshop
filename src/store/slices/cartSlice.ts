import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductItemModel } from 'src/screens/tabs/home/components/ProductItem'
import { RootState } from '../configureStore';

let initialState: { [key: string]: ProductItemModel } = {};


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductItemModel>) => {
            state[action.payload.id] = action.payload
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state = Object.keys(state).reduce((p, c) => {
                if (c === action.payload) {
                    return p;
                }
                return { ...p, [c]: state[c] };
            }, {})
            return state;
        },
        clearCart: () => (initialState)
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, clearCart, removeFromCart } = cartSlice.actions
// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart
export const selectCartList = (state: RootState) => Object.keys(state.cart).map((e) => state.cart[e])
export const selectCartTotal = (state: RootState) => Object.keys(state.cart).reduce((p, c) => {
    //TODO Replace it with data from API
    return p + parseFloat(state.cart[c].newPrice.replace(/ /g, ""));
}, 0)


export default cartSlice.reducer